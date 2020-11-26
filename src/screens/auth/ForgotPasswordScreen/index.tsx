import React from 'react';
import CloseButton from 'components/header/CloseButton';
import Header from 'components/header/Header';
import { View } from 'react-native';

const ForgotPasswordScreen = () => (
  <View>
    <Header
      title={'Ovide Contraseña'}
      alignment="center"
      rightButton={<CloseButton />}
    />
  </View>
);

export default ForgotPasswordScreen;
