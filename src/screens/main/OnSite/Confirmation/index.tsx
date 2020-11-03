import React from 'react';
import CloseButton from 'components/header/CloseButton';
import Header from 'components/header/Header';
import { View } from 'react-native';
import styles from './styles';
import Button from 'components/button/Button';
import InfoRow from 'components/card/InfoRow';
import { useNavigation } from '@react-navigation/native';
import { HOME_SCREEN } from 'utils/routes';
import { useSelector } from 'react-redux';
import { getChargeInfo } from 'utils/redux/charge/reducer';

const SuccessModal = () => {
  const navigation = useNavigation();
  const chargeInfo = useSelector(getChargeInfo);

  return (
    <View style={styles.container}>
      <Header
        title={'Cobro exitoso'}
        alignment="center"
        rightButton={<CloseButton />}
      />
      <View style={styles.card}>
        <InfoRow label="Operación" value={chargeInfo.operationCode || '-'} />
        <InfoRow label="Monto" value={`$ ${chargeInfo.amount}`} />
        <InfoRow label="Concepto" value={chargeInfo.description} />
        <InfoRow
          label="Vendedor"
          value={chargeInfo.client ? chargeInfo.client.name : '-'}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="Confirmar"
            style={styles.button}
            onPress={() => {
              navigation.navigate(HOME_SCREEN);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SuccessModal;
