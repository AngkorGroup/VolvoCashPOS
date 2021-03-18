import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { unit } from 'utils/responsive';
import styles from './styles';
import Icon from 'components/icon/Icon';
import ExitButton from 'components/header/ExitButton';
import { useNavigation } from '@react-navigation/native';
import { RESET_PASSWORD_SCREEN } from 'utils/routes';
import { api } from 'utils/api';

const ProfileScreen = () => {
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const navigation = useNavigation();
  const goToResetPassword = () => {
    navigation.navigate(RESET_PASSWORD_SCREEN);
  };

  useEffect(() => {
    api.get('profile').then((res) => {
      console.log('===', res);
      setUser({
        name: res.fullName,
        phone: res.phone,
        email: res.email,
      });
    });
  }, []);

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
      <Header
        title={'Configuración'}
        alignment="left"
        leftButton={<BackButton />}
      />
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? unit(40) : 0}>
        <View style={styles.container}>
          <View style={styles.containerText}>
            <Text style={styles.textName}>{user.name}</Text>
            <Text style={styles.text}>{user.email}</Text>
            <Text style={styles.text}>{user.phone}</Text>
          </View>
          <TouchableOpacity
            onPress={goToResetPassword}
            style={styles.containerBox}>
            <Icon style={styles.icon} family="SimpleLineIcons" name="lock" />
            <Text>Cambiar contraseña</Text>
          </TouchableOpacity>
          <ExitButton />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
