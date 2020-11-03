import React from 'react';
import CloseButton from 'components/header/CloseButton';
import Header from 'components/header/Header';
import { View } from 'react-native';
import styles from './styles';
import Button from 'components/button/Button';
import InfoRow from 'components/card/InfoRow';
import { theme } from 'utils/styles';
import { useNavigation } from '@react-navigation/native';
import { HOME_SCREEN } from 'utils/routes';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        title={'Confirmar cobro'}
        alignment="center"
        rightButton={<CloseButton />}
      />
      <View style={styles.card}>
        <InfoRow label="Monto" value="S/ 1,200.00" />
        <InfoRow label="Concepto" value="Lubricante HD-5000" />
        <InfoRow label="Vendedor" value="Luis Ramos" />
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
            onPress={() => navigation.navigate(HOME_SCREEN)}
          />
        </View>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
