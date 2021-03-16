import React, { useState } from 'react';
import Button from 'components/button/Button';
import ShortInput from 'components/input/ShortInput';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { unit } from 'utils/responsive';
import Header from 'components/header/Header';
import { api } from 'utils/api';
import { palette } from 'utils/styles';
import { LOGIN_SCREEN } from 'utils/routes';
import Alert from 'components/alert/Alert';
import BackButton from 'components/header/BackButton';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [newPass, setNewPass] = useState('');
  const [newPassRepeat, setNewPassRepeat] = useState('');
  const [code, setCode] = useState('');
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const changePassword = () => {
    if (!newPass || !newPassRepeat) {
      setAlertMessage('Llenar ambos campos para continuar.');
      setAlert(true);
      return;
    }
    if (newPass !== newPassRepeat) {
      setAlertMessage('Ambos campos deben ser iguales.');
      setAlert(true);
      return;
    }
    setLoading(true);
    api
      .post('forgot_password', {
        password: newPass,
        code,
        email: 'rodriguez.marcomc@gmail.com',
      })
      .then(() => {
        setLoading(false);
        setAlertMessage('Contraseña cambiada exitosamente.');
        setAlert(true);
        navigation.navigate(LOGIN_SCREEN);
      })
      .catch((e) => {
        console.log('aaaaa', e);
        setLoading(false);
        setAlertMessage('Error al cambiar contraseña.');
        setAlert(true);
      });
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
      <Header
        title={'Cambiar contraseña'}
        alignment="left"
        leftButton={<BackButton />}
      />
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? unit(40) : 0}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Te enviamos un código por correo. Ingresa el código.
          </Text>
          <View style={styles.containerInput}>
            <ShortInput
              onChangeText={setCode}
              placeholder="Código correo"
              keyboardType="numeric"
              iconFamily="SimpleLineIcons"
              iconName="envelope"
            />
            <ShortInput
              onChangeText={setNewPass}
              placeholder="Nueva contraseña"
              keyboardType="default"
              iconFamily="SimpleLineIcons"
              iconName="lock"
            />
            <ShortInput
              onChangeText={setNewPassRepeat}
              placeholder="Repetir contraseña"
              keyboardType="default"
              iconFamily="SimpleLineIcons"
              iconName="lock"
            />
          </View>
        </View>
        <Button onPress={changePassword} title="Cambiar contraseña" />
      </KeyboardAvoidingView>
      {loading && (
        <ActivityIndicator
          size="large"
          color={palette.ocean}
          animating={true}
        />
      )}
      <Alert
        visible={alert}
        title={alertMessage}
        confirmText="Ok"
        onConfirm={() => setAlert(false)}
      />
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
