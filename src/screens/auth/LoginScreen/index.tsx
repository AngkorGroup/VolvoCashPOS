import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { palette } from 'utils/styles';
import Button from 'components/button/Button';
import { unit } from 'utils/responsive';
import styles from '../styles';
import Input from 'components/input/Input';
import { login, cleanError } from 'utils/redux/auth/actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPushToken } from 'utils/redux/pushToken/reducer';
import { useNavigation } from '@react-navigation/native';
import { getError, getIsFetching } from 'utils/redux/auth/reducer';
import { FORGOT_PASSWORD_SCREEN } from 'utils/routes';
import VersionNumber from 'react-native-version-number';
import { validEmail } from 'utils/valid-email';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const deviceToken: string = useSelector(getPushToken);
  const isFetching = useSelector(getIsFetching);
  const error = useSelector(getError);
  const navigation = useNavigation();
  let appVersion = `v${VersionNumber.appVersion} (${VersionNumber.buildVersion})`;

  const goToForgotPassword = () => {
    navigation.navigate(FORGOT_PASSWORD_SCREEN);
  };

  const loginUser = () => {
    if (!validEmail(email)) {
      return Alert.alert('Error', 'Correo inválido.');
    }

    if (!email || !password) {
      return Alert.alert('Error', 'Debe llenar los campos email y contraseña.');
    }

    dispatch(
      login({
        email: email.toLocaleLowerCase(),
        password,
        deviceToken,
      }),
    );
  };

  return (
    <FastImage source={require('assets/images/pos-bg.png')} style={styles.bg}>
      {Boolean(error) &&
        Alert.alert('Error', error, [
          { text: 'OK', onPress: () => dispatch(cleanError()) },
        ])}
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <FastImage
              source={require('assets/images/volvo-pos-logo.png')}
              style={styles.volvoCashLogo}
            />
          </View>
          <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? unit(40) : 0}>
            {isFetching && (
              <ActivityIndicator
                size="large"
                color={palette.ocean}
                animating={true}
              />
            )}
            <Input
              placeholder="Correo"
              iconFamily="EvilIcons"
              iconName="user"
              onChangeText={setEmail}
            />
            <Input
              placeholder="Contraseña"
              iconFamily="EvilIcons"
              iconName="unlock"
              textContentType="password"
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <View />
            <TouchableOpacity onPress={goToForgotPassword}>
              <Text style={styles.text}>Olvidé mi contraseña</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Ingresar"
            onPress={() => {
              loginUser();
            }}
          />
        </View>
        <Text style={styles.textVersion}>{appVersion}</Text>
      </SafeAreaView>
    </FastImage>
  );
};

export default LoginScreen;
