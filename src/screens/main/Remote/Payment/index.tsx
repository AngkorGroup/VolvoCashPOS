import React, { useState, useRef } from 'react';
import Header from 'components/header/Header';
import { View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import styles from './styles';
import BackButton from 'components/header/BackButton';
import Button from 'components/button/Button';
import ClientModal from 'screens/main/Remote/ClientModal'
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from 'components/input/Input';
import { unit } from 'utils/responsive';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('');
  const [client, setClient] = useState('');
  const [card, setCard] = useState('');
  const [isCliModalVisible, setIsCliModalVisible] = useState(false);

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
        title={'Cobro Presencial'}
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
                value={client}
                onChangeText={() => { }}
                containerStyle={styles.input}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setIsCliModalVisible(true);
          }}>
            <View pointerEvents='none'>
              <Input
                placeholder="Tarjeta"
                value={card}
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
      <ClientModal isVisible={isCliModalVisible} setIsVisible={setIsCliModalVisible} />
    </SafeAreaView >
  );
};

export default PaymentScreen;
