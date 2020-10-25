import React, { useContext, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Button from 'components/button/Button';
import { unit } from 'utils/responsive';
import styles from './styles';
import Input from 'components/input/Input';
import * as routes from 'utils/routes';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Context as AuthContext } from '../../context/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  // const { state, signin } = useContext(AuthContext);
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
              console.log('sigin');
              // signin({ email, password });
            }}
          />
        </View>
      </SafeAreaView>
    </FastImage>
  );
};

export default LoginScreen;
