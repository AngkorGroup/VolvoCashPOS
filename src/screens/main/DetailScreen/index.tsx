import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { getChargeId } from 'utils/redux/chargeId/reducer';
import { ChargeState } from 'utils/redux/types';
import Details from 'components/detail';
import { api } from 'utils/api';
import { Charge } from 'utils/redux/types';

const ConfirmationScreen = () => {
  const [chargeInfo, setChargeInfo] = useState<ChargeState>({});
  const [loading, setLoading] = useState(true);
  const chargeId: number = useSelector(getChargeId);

  useEffect(() => {
    getCharge();
  }, []);

  const getCharge = () => {
    setLoading(true);
    api
      .get(`charges/${chargeId}`)
      .then((res: Charge) => {
        setChargeInfo({
          description: res.displayName,
          amount: res.amount.value,
          operationCode: res.operationCode || '',
          client: {
            documentType: res.card.contact.documentType,
            documentNumber: res.card.contact.documentNumber,
            name: res.card.contact.fullName,
          },
        });
        setLoading(false);
      })
      .catch(() => {
        return Alert.alert('Error', 'Información no disponible');
      });
  };

  return (
    <Details
      buttons={{
        cancel: false,
        confirm: false,
      }}
      loading={loading}
      header="Detalle del cobro"
      chargeInfo={chargeInfo}
    />
  );
};

export default ConfirmationScreen;
