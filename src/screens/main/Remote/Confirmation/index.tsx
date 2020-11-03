import React from 'react';
import CloseButton from 'components/header/CloseButton';
import Header from 'components/header/Header';
import { View, Alert } from 'react-native';
import styles from './styles';
import Button from 'components/button/Button';
import InfoRow from 'components/card/InfoRow';
import { theme } from 'utils/styles';
import { useNavigation } from '@react-navigation/native';
import { HOME_SCREEN } from 'utils/routes';
import { useSelector } from 'react-redux';
import { getChargeInfo } from 'utils/redux/charge/reducer';
import { api } from 'utils/api';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const chargeInfo = useSelector(getChargeInfo);

  const createCharge = () => {
    api
      .post('charges', {
        amount: {
          value: chargeInfo.amount,
          currency: 'USD',
        },
        description: chargeInfo.description,
        chargeType: 'Remote',
        cardToken: chargeInfo.cardToken,
      })
      .then((res) => {
        navigation.navigate(HOME_SCREEN);
      })
      .catch(() => {
        return Alert.alert('Error', 'Tarjeta con saldo insuficiente');
      });
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Confirmar cobro'}
        alignment="center"
        rightButton={<CloseButton />}
      />
      <View style={styles.card}>
        <InfoRow label="Monto" value={`${chargeInfo.amount}`} />
        <InfoRow label="Concepto" value={chargeInfo.description} />
        <InfoRow
          label="Cliente"
          value={chargeInfo.client ? chargeInfo.client.name : '-'}
        />
        <InfoRow
          label={chargeInfo.client ? chargeInfo.client.documentType : '-'}
          value={chargeInfo.client ? chargeInfo.client.documentNumber : '-'}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="Rechazar"
            textStyle={theme.red}
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Button
            title="Confirmar"
            style={styles.button}
            onPress={() => createCharge()}
          />
        </View>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
