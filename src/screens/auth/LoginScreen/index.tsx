import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  Alert,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Button from 'components/button/Button';
import { unit } from 'utils/responsive';
import styles from './styles';
import Input from 'components/input/Input';
import { login } from 'utils/redux/auth/actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

const mockAuth = {
  email: 'cajero@volvo.com',
  password: 'Holi1234$',
  deviceToken: 'xdxdxd',
};

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loginUser = () => {
    if (!email && !password) {
      return Alert.alert('Error', 'Debe llenar los campos email y contraseña.');
    }
    dispatch(login(mockAuth));
  };

  return (
    <FastImage source={require('assets/images/pos-bg.png')} style={styles.bg}>
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
            <Text style={styles.text}>Olvidé mi contraseña</Text>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Ingresar"
            onPress={() => {
              // console.log('sigin');
              loginUser();
            }}
          />
        </View>
      </SafeAreaView>
    </FastImage>
  );
};

export default LoginScreen;
