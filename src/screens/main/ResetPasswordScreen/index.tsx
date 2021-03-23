import React, { useState } from 'react';
import Button from 'components/button/Button';
import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import ShortInput from 'components/input/ShortInput';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ActivityIndicator,
} from 'react-native';
import { palette } from 'utils/styles';
import Alert from 'components/alert/Alert';
import { SafeAreaView } from 'react-native-safe-area-context';
import { unit } from 'utils/responsive';
import { api } from 'utils/api';
import { useNavigation } from '@react-navigation/native';
import { HOME_SCREEN } from 'utils/routes';
import styles from './styles';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const [newPass, setNewPass] = useState('');
  const [oldPass, setOldPass] = useState('');
  const [newPassRepeat, setNewPassRepeat] = useState('');
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const changePassword = () => {
    if (!newPass || !newPassRepeat || !oldPass) {
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
      .post('reset_password', {
        oldPassword: oldPass,
        newPassword: newPass,
        confirmPassword: newPassRepeat,
      })
      .then((res) => {
        console.log('RESSSS', res);
        setLoading(false);
        setAlertMessage('Contraseña cambiada exitosamente.');
        setAlert(true);
        navigation.navigate(HOME_SCREEN);
      })
      .catch((e) => {
        setLoading(false);
        setAlertMessage('Error al cambiar contraseña.');
        setAlert(true);
      });
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
      <Header
        leftButton={<BackButton />}
        title={'Cambiar contraseña'}
        alignment="left"
      />
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? unit(40) : 0}>
        <View style={styles.container}>
          <View style={styles.containerInput}>
            <ShortInput
              placeholder="Contraseña Actual"
              keyboardType="default"
              iconFamily="SimpleLineIcons"
              iconName="lock"
              textContentType="password"
              onChangeText={setOldPass}
              secureTextEntry={true}
            />
            <ShortInput
              placeholder="Nueva contraseña"
              keyboardType="default"
              iconFamily="SimpleLineIcons"
              iconName="lock"
              textContentType="password"
              onChangeText={setNewPass}
              secureTextEntry={true}
            />
            <ShortInput
              placeholder="Repetir contraseña"
              keyboardType="default"
              iconFamily="SimpleLineIcons"
              iconName="lock"
              textContentType="password"
              onChangeText={setNewPassRepeat}
              secureTextEntry={true}
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

export default ResetPasswordScreen;
