import React, { useState } from 'react';
import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import { ActivityIndicator, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { palette } from 'utils/styles';
import { ON_SITE_SUCCESS_SCREEN } from 'utils/routes';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { api } from 'utils/api';
import { useSelector } from 'react-redux';
import { getChargeInfo } from 'utils/redux/charge/reducer';
import { useDispatch } from 'react-redux';
import { setCharge } from 'utils/redux/charge/actions';
import styles from './styles';

interface QRData {
  data: string;
}

const TransfersScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const chargeInfo = useSelector(getChargeInfo);
  const dispatch = useDispatch();

  const onSuccess = (value: string) => {
    setLoading(true);
    const payload = {
      amount: {
        value: chargeInfo.amount,
        currency: 'USD',
      },
      description: chargeInfo.description,
      chargeType: 'FaceToFace',
      cardToken: value,
    };

    api
      .post('charges', payload)
      .then((res) => {
        setLoading(false);
        dispatch(
          setCharge({
            ...chargeInfo,
            operationCode: res.operationCode,
            client: {
              name: res.card.contact.fullName,
            },
          }),
        );
        navigation.navigate(ON_SITE_SUCCESS_SCREEN);
      })
      .catch(() => {
        setLoading(false);
        return Alert.alert('Error', 'Tarjeta con saldo insuficiente');
      });
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
      <Header
        title={'Escanear código QR'}
        alignment="left"
        leftButton={<BackButton />}
      />
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator
            size="large"
            color={palette.ocean}
            animating={true}
          />
        </View>
      ) : (
          <QRCodeScanner onRead={(e) => onSuccess(e.data)} />
        )}
    </SafeAreaView>
  );
};

export default TransfersScreen;
