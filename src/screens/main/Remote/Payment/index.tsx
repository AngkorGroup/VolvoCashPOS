import React, { useState, useRef } from 'react';
import Header from 'components/header/Header';
import { View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import styles from './styles';
import BackButton from 'components/header/BackButton';
import Button from 'components/button/Button';
import ClientModal from 'screens/main/Remote/ClientModal'
import CardListModal from 'screens/main/Remote/CardModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from 'components/input/Input';
import { unit } from 'utils/responsive';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('');
  const [client, setClient] = useState({ id: null, name: '' });
  const [card, setCard] = useState({ id: null, title: '' });
  const [isCliModalVisible, setIsCliModalVisible] = useState(false);
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);

  const navigation = useNavigation();

  const setOnlyNumbers = (val: String) => {
    return setAmount(val.replace(/[^\d,]+/, ''));
  }

  const goToQRScreen = () => {
    // navigation.navigate(QR_SCREEN);
  }

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
          <TouchableOpacity onPress={() => {
            setIsCliModalVisible(true);
          }}>
            <View pointerEvents='none'>
              <Input
                placeholder="Cliente"
                value={client.name}
                onChangeText={() => { }}
                containerStyle={styles.input}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setIsCardModalVisible(true);
          }}>
            <View pointerEvents='none'>
              <Input
                placeholder="Tarjeta"
                value={card.title}
                onChangeText={() => { }}
                containerStyle={styles.input}
              />
            </View>
          </TouchableOpacity>
          <Input
            placeholder="Monto"
            value={amount}
            currency='$'
            onChangeText={setOnlyNumbers}
            keyboardType='numeric'
            containerStyle={styles.input}
          />
          <Input
            placeholder="Concepto"
            containerStyle={styles.input}
            onChangeText={setConcept}
          />
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <Button
            title="Siguiente"
            onPress={goToQRScreen}
          />
        </View>
      </View>
      <ClientModal setClient={setClient} isVisible={isCliModalVisible} setIsVisible={setIsCliModalVisible} />
      <CardListModal setCard={setCard} isVisible={isCardModalVisible} setIsVisible={setIsCardModalVisible} />
    </SafeAreaView >
  );
};

export default PaymentScreen;
