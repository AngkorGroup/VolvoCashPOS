import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { getChargeId } from 'utils/redux/chargeId/reducer';
import { ChargeState } from 'utils/redux/types';
import Details from 'components/detail';
import { api } from 'utils/api';
import { HOME_SCREEN } from 'utils/routes';
import { useNavigation } from '@react-navigation/native';
import { Charge } from 'utils/redux/types';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';

const ConfirmationScreen = () => {
  const [chargeInfo, setChargeInfo] = useState<ChargeState>({});
  const [loading, setLoading] = useState(true);
  const chargeId: number = useSelector(getChargeId);
  const navigation = useNavigation();

  useEffect(() => {
    getCharge();
  }, []);

  const handleSharePress = async (imageUrl: string) => {
    setLoading(true);
    RNFetchBlob.fetch('GET', imageUrl, {
      'Content-Type': 'multipart/form-data',
    })
      .then((res) => {
        const status = res.info().status;
        if (status === 200) {
          Share.open({
            url: `data:image/jpeg;base64,${res.base64()}`,
          })
            .then(() => {
              setLoading(false);
            })
            .catch(() => {
              setLoading(false);
              return Alert.alert(
                'Error',
                'Hubo un problema al momento de compartir el comprobante.',
              );
            });
        }
      })
      .catch(() => {
        setLoading(false);
        return Alert.alert(
          'Error',
          'Hubo un problema al momento de compartir el comprobante.',
        );
      });
  };

  const getCharge = () => {
    setLoading(true);
    api
      .get(`charges/${chargeId}`)
      .then((res: Charge) => {
        setChargeInfo({
          description: res.displayName,
          imageUrl: res.imageUrl,
          amount: res.amount.value,
          amountLabel: res.amount.label,
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
        navigation.navigate(HOME_SCREEN);
        return Alert.alert('Error', 'Información no disponible');
      });
  };

  return (
    <Details
      buttons={{
        cancel: false,
        confirm: false,
        share: true,
      }}
      handleSharePress={handleSharePress}
      loading={loading}
      header="Detalle del cobro"
      chargeInfo={chargeInfo}
    />
  );
};

export default ConfirmationScreen;
