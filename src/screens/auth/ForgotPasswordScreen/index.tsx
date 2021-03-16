import React, { useState } from 'react';
import Header from 'components/header/Header';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Alert from 'components/alert/Alert';
import BackButton from 'components/header/BackButton';
import styles from './styles';
import { unit } from 'utils/responsive';
import { palette } from 'utils/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShortInput from 'components/input/ShortInput';
import Button from 'components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { api } from 'utils/api';
import { CHANGE_PASSWORD_SCREEN } from 'utils/routes';
import { validEmail } from 'utils/valid-email';
import { useDispatch } from 'react-redux';
import { setRecoveryEmail } from 'utils/redux/forgetPass/actions';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  const goToChangePassword = () => {
    if (!email && !validEmail(email)) {
      setAlert(true);
      return;
    }
    setLoading(true);
    api
      .post('send_verification_code', { email })
      .then(() => {
        setLoading(false);
        dispatch(setRecoveryEmail(email));
        navigation.navigate(CHANGE_PASSWORD_SCREEN);
      })
      .catch((e) => {
        setLoading(false);
      });
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
      <Header
        title={'Olvidé mi contraseña'}
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
            onChangeText={setEmail}
            iconName="user"
          />
        </View>
        {loading && (
          <ActivityIndicator
            size="large"
            color={palette.ocean}
            animating={true}
          />
        )}
        <Alert
          visible={alert}
          title={'Ingrese un correo válido'}
          confirmText="Ok"
          onConfirm={() => setAlert(false)}
        />
        <Button title="Solicitar" onPress={goToChangePassword} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
