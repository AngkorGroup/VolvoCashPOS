import React, { useState } from 'react';
import Header from 'components/header/Header';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
} from 'react-native';
import styles from './styles';
import BackButton from 'components/header/BackButton';
import Button from 'components/button/Button';
import { QR_SCREEN } from 'utils/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from 'components/input/Input';
import { unit } from 'utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCharge } from 'utils/redux/charge/actions';

const PaymentScreen = () => {
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const setOnlyNumbers = (val: String) => {
    return setAmount(val.replace(/[^\d,]+/, ''));
  };

  const goToQRScreen = () => {
    if (!amount) {
      return Alert.alert('Error', 'Colocar un monto para continuar.');
    }
    dispatch(
      setCharge({
        amount: parseInt(amount, 10),
        description: concept,
      }),
    );
    navigation.navigate(QR_SCREEN);
  };

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
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <Button title="Siguiente" onPress={goToQRScreen} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
