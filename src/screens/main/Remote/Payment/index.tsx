import React, { useState } from 'react';
import Header from 'components/header/Header';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import styles from './styles';
import BackButton from 'components/header/BackButton';
import Button from 'components/button/Button';
import ClientModal from 'screens/main/Remote/ClientModal';
import CardListModal from 'screens/main/Remote/CardModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from 'components/input/Input';
import { unit } from 'utils/responsive';
import { REMOTE_CONFIRMATION_SCREEN } from 'utils/routes';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCharge } from 'utils/redux/charge/actions';
import { IClient } from 'utils/redux/types';

const PaymentScreen = () => {
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('');
  const [client, setClient] = useState<IClient>({
    name: '',
    documentType: '',
    documentNumber: '',
  });
  const [card, setCard] = useState({ cardToken: '', title: '' });
  const [isCliModalVisible, setIsCliModalVisible] = useState(false);
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const setOnlyNumbers = (val: String) => {
    return setAmount(val.replace(/[^\d,]+/, ''));
  };

  const goToConfirmationScreen = () => {
    if (!amount || !concept || !client.id || !card.cardToken) {
      return Alert.alert('Error', 'Llenar todos los datos para continuar.');
    }

    dispatch(
      setCharge({
        amount: parseInt(amount, 10),
        cardToken: card.cardToken,
        description: concept,
        client,
      }),
    );

    navigation.navigate(REMOTE_CONFIRMATION_SCREEN);
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
      <Header
        title={'Cobro Remoto'}
        alignment="center"
        leftButton={<BackButton />}
      />
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? unit(40) : 0}>
          <Text style={styles.label}>Monto</Text>
          <Input
            placeholder=""
            value={amount}
            currency="$"
            onChangeText={setOnlyNumbers}
            keyboardType="numeric"
            containerStyle={styles.input}
          />
          <Text style={styles.label}>Concepto</Text>
          <Input
            placeholder="Escribe un concepto del cobro"
            containerStyle={styles.input}
            onChangeText={setConcept}
          />
          <Text style={styles.label}>Cliente</Text>
          <TouchableOpacity
            onPress={() => {
              setIsCliModalVisible(true);
            }}>
            <View pointerEvents="none">
              <Input
                placeholder="Seleccione un cliente"
                value={client.name}
                onChangeText={() => { }}
                containerStyle={styles.input}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.label}>Tarjeta</Text>
          <TouchableOpacity
            onPress={() => {
              if (client.id) {
                setIsCardModalVisible(true);
              }
            }}>
            <View pointerEvents="none">
              <Input
                placeholder="Seleccione una tarjeta"
                value={card.title}
                onChangeText={() => { }}
                containerStyle={styles.input}
              />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <Button title="Cobrar" onPress={goToConfirmationScreen} />
        </View>
      </View>
      <ClientModal
        setClient={setClient}
        isVisible={isCliModalVisible}
        setIsVisible={setIsCliModalVisible}
      />
      <CardListModal
        setCard={setCard}
        clientId={client.id}
        isVisible={isCardModalVisible}
        setIsVisible={setIsCardModalVisible}
      />
    </SafeAreaView>
  );
};

export default PaymentScreen;
