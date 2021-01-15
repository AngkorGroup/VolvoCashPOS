import React from 'react';
import Header from 'components/header/Header';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import BackButton from 'components/header/BackButton';
import styles from './styles';
import { unit } from 'utils/responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShortInput from 'components/input/ShortInput';
import Button from 'components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { CHANGE_PASSWORD_SCREEN } from 'utils/routes';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const goToChangePassword = () => {
    navigation.navigate(CHANGE_PASSWORD_SCREEN);
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
      <Header
        title={'Olvide mi contraseña'}
        alignment="left"
        leftButton={<BackButton />}
      />
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? unit(40) : 0}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Si olvidaste tu contraseña, solicita una nueva aquí. Recibirás un
            link en tu correo con instrucciones para generar una nueva.
          </Text>
          <ShortInput
            placeholder="Correo"
            keyboardType="email-address"
            iconFamily="EvilIcons"
            iconName="user"
          />
        </View>
        <Button title="Solicitar" onPress={goToChangePassword} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
