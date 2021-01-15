import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { unit } from 'utils/responsive';
import styles from './styles';
import Icon from 'components/icon/Icon';
import ExitButton from 'components/header/ExitButton';
import { getUserName } from 'utils/storage';
import { useNavigation } from '@react-navigation/native';
import { RESET_PASSWORD_SCREEN } from 'utils/routes';

const ProfileScreen = () => {

    const [user, setUser] = useState('');
    const navigation = useNavigation();
    const goToResetPassword = () => {
        navigation.navigate(RESET_PASSWORD_SCREEN);
    };

    getUserName().then((res) => {
        setUser(res || '-');
    });

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
                        <Text style={styles.textName}>{user}</Text>
                        <Text style={styles.text}>luis.ramos@volvo.com</Text>
                        <Text style={styles.text}>990300645</Text>
                        <Text style={styles.text}>DNI: 73562312</Text>
                    </View>
                    <TouchableOpacity onPress={goToResetPassword} style={styles.containerBox}>
                        <Icon style={styles.icon} family="SimpleLineIcons" name="lock" />
                        <Text>Cambiar contraseña</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        {<ExitButton />}
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ProfileScreen;