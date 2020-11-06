import React from 'react';
import CloseButton from 'components/header/CloseButton';
import Header from 'components/header/Header';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import Button from 'components/button/Button';
import InfoRow from 'components/card/InfoRow';
import { theme } from 'utils/styles';
import { palette } from 'utils/styles';
import { ChargeState } from 'utils/redux/types';

interface IButtons {
  cancel: boolean;
  confirm: boolean;
}

interface IDetail {
  header: string;
  loading: boolean;
  chargeInfo: ChargeState;
  onCancel?: Function;
  onConfirm?: Function;
  buttons: IButtons;
}

const DetailScreen: React.FC<IDetail> = ({
  header,
  loading = false,
  chargeInfo,
  onCancel = () => { },
  onConfirm = () => { },
  buttons,
}) => {
  console.log(loading);
  return (
    <View style={styles.container}>
      <Header title={header} alignment="center" rightButton={<CloseButton />} />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={palette.ocean}
          animating={true}
        />
      ) : (
          <View style={styles.card}>
            {Boolean(chargeInfo.operationCode) && (
              <InfoRow label="Operación" value={`${chargeInfo.operationCode}`} />
            )}
            <InfoRow label="Monto" value={`$ ${chargeInfo.amount}`} />
            <InfoRow label="Concepto" value={chargeInfo.description} />
            <InfoRow
              label="Cliente"
              value={chargeInfo.client ? chargeInfo.client.name : '-'}
            />
            <InfoRow
              label={chargeInfo.client ? chargeInfo.client.documentType : '-'}
              value={chargeInfo.client?.documentNumber || '-'}
            />
            <View style={styles.buttonsContainer}>
              {buttons.cancel && (
                <Button
                  title="Rechazar"
                  textStyle={theme.red}
                  style={styles.button}
                  onPress={() => {
                    onCancel();
                  }}
                />
              )}
              {buttons.confirm && (
                <Button
                  title="Confirmar"
                  style={styles.button}
                  onPress={() => onConfirm()}
                />
              )}
            </View>
          </View>
        )}
    </View>
  );
};

export default DetailScreen;
