import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HOME_SCREEN } from 'utils/routes';
import { useSelector, useDispatch } from 'react-redux';
import { getChargeInfo } from 'utils/redux/charge/reducer';
import { ChargeState } from 'utils/redux/types';
import Details from 'components/detail';
import { api } from 'utils/api';
import { updateList } from 'utils/redux/updateList/actions';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const chargeInfo: ChargeState = useSelector(getChargeInfo);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const createCharge = () => {
    setLoading(true);
    api
      .post('charges', {
        amount: {
          value: chargeInfo.amount,
        },
        description: chargeInfo.description,
        chargeType: 'Remote',
        cardToken: chargeInfo.cardToken,
      })
      .then((res) => {
        setTimeout(() => {
          dispatch(updateList());
          setLoading(false);
          Alert.alert(
            'Cobro pendiente de confirmar por cliente',
            'Se ha generado el cobro correctamente.',
          );
          navigation.navigate(HOME_SCREEN);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        return Alert.alert('Error', 'Tarjeta con saldo insuficiente');
      });
  };

  return (
    <Details
      buttons={{
        cancel: true,
        confirm: true,
        share: false,
      }}
      header="Confirmar cobro"
      chargeInfo={chargeInfo}
      onCancel={navigation.goBack}
      onConfirm={createCharge}
      loading={loading}
    />
  );
};

export default ConfirmationScreen;
