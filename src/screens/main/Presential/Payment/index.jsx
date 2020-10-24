import ExitButton from 'components/header/ExitButton';
import Header from 'components/header/Header';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const PaymentScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
      <Header
        title={'Cobro Presencial'}
        alignment="center"
        rightButton={<ExitButton />}
      />
      <View style={styles.container} />
    </SafeAreaView>
  );
};

export default PaymentScreen;
