import React, { useState } from 'react';
import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { palette } from 'utils/styles';
import { PRESENTIAL_SUCCESS_SCREEN } from 'utils/routes';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './styles';

interface QRData {
  data: string;
}

const TransfersScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onSuccess = (val: QRData) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.warn(val.data);
      navigation.navigate(PRESENTIAL_SUCCESS_SCREEN);
    }, 1000);
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
      <Header
        title={'Escanear código QR'}
        alignment="center"
        leftButton={<BackButton />}
      />
      { loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={palette.ocean} animating={true} />
        </View>
      ) : (
          <QRCodeScanner
            onRead={onSuccess}
          />
        )}
    </SafeAreaView>
  );
};

export default TransfersScreen;
