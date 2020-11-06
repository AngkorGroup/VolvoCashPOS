import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HOME_SCREEN } from 'utils/routes';
import { useSelector } from 'react-redux';
import { getChargeInfo } from 'utils/redux/charge/reducer';
import { ChargeState } from 'utils/redux/types';
import Details from 'components/detail';
import { api } from 'utils/api';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const chargeInfo: ChargeState = useSelector(getChargeInfo);

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
      .then(() => {
        navigation.navigate(HOME_SCREEN);
      })
      .catch(() => {
        return Alert.alert('Error', 'Tarjeta con saldo insuficiente');
      });
  };

  return (
    <Details
      buttons={{
        cancel: true,
        confirm: true,
      }}
      header="Confirmar cobro"
      chargeInfo={chargeInfo}
      onCancel={navigation.goBack}
      onConfirm={createCharge}
    />
  );
};

export default ConfirmationScreen;
