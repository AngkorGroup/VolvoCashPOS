import React, { useEffect, useState } from 'react';
import CloseButton from 'components/header/CloseButton';
import Header from 'components/header/Header';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import styles from './styles';
import Button from 'components/button/Button';
import ShareButton from 'components/button/Share';
import InfoRow from 'components/card/InfoRow';
import { theme, palette } from 'utils/styles';
import { getCurrentDate, getCurrentHour } from 'utils/moment';
import { ChargeState } from 'utils/redux/types';
import { getUserName } from 'utils/storage';

interface IButtons {
  cancel: boolean;
  confirm: boolean;
  share: boolean;
}

interface IDetail {
  header: string;
  loading: boolean;
  chargeInfo: ChargeState;
  onCancel?: Function;
  onConfirm?: Function;
  buttons: IButtons;
  handleSharePress?: Function;
}

const DetailScreen: React.FC<IDetail> = ({
  header,
  loading = false,
  chargeInfo,
  onCancel = () => { },
  onConfirm = () => { },
  buttons,
  handleSharePress = () => { },
}) => {
  const [user, setUser] = useState('-');

  useEffect(() => {
    getUserName().then((res) => {
      setUser(res || '-');
    });
  }, []);

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
            <ScrollView style={styles.scrollContainer}>
              {Boolean(chargeInfo.operationCode) && (
                <InfoRow
                  label="Operación"
                  value={`${chargeInfo.operationCode}`}
                />
              )}
              <InfoRow
                textStyle={styles.amountRow}
                label="Monto"
                value={chargeInfo.amountLabel}
              />
              <InfoRow label="Concepto" value={chargeInfo.displayName || '-'} />
              <InfoRow label="Observación" value={chargeInfo.description} />
              <InfoRow label="Cajero" value={user} />
              <InfoRow
                label="Fecha"
                value={chargeInfo.date || getCurrentDate()}
              />
              <InfoRow label="Hora" value={chargeInfo.hour || getCurrentHour()} />

              <View style={styles.buttonsContainer}>
                {buttons.share && chargeInfo.imageUrl && (
                  <View style={styles.shareContainer}>
                    <ShareButton
                      onPress={() => handleSharePress(chargeInfo.imageUrl)}
                    />
                  </View>
                )}
                {buttons.cancel && (
                  <Button
                    title="Cancelar"
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
            </ScrollView>
          </View>
        )}
    </View>
  );
};

export default DetailScreen;
