import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Button from 'components/button/Button';
import { unit } from 'utils/responsive';
import { theme } from 'utils/styles';
import Input from 'components/input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Context as AuthContext } from '../../context/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            />
            <Text style={styles.text}>Olvidé mi contraseña</Text>
          </KeyboardAvoidingView>
        </View>
        <View>
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

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  safeContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: unit(50),
    margin: unit(30),
  },
  container: {
    width: unit(245),
    height: unit(240),
    ...theme.disabledSurface,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    position: 'relative',
    marginBottom: unit(40),
    marginTop: unit(10),
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: -unit(120),
    right: 0,
  },
  volvoCashLogo: {
    width: 190,
    height: 190,
    flex: 1,
    resizeMode: 'contain',
    marginVertical: unit(20),
  },
  text: {
    // ...theme.small,
    color: '#16A6C9',
  },
});

export default LoginScreen;
