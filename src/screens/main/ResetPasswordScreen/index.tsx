import Button from 'components/button/Button';
import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import ShortInput from 'components/input/ShortInput';
import React from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { unit } from 'utils/responsive';
import styles from './styles';


const ResetPasswordScreen = () => {
    return (
        <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
            <Header leftButton={<BackButton />} title={'Cambiar contraseña'} alignment="left" />
            <KeyboardAvoidingView
                style={styles.keyboardContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? unit(40) : 0}>
                <View style={styles.container}>
                    <View style={styles.containerInput}>
                        <ShortInput
                            placeholder="Nueva contraseña"
                            keyboardType="default"
                            iconFamily="SimpleLineIcons"
                            iconName="lock"
                        />
                        <ShortInput
                            placeholder="Repetir contraseña"
                            keyboardType="default"
                            iconFamily="SimpleLineIcons"
                            iconName="lock"
                        />
                    </View>
                </View>
                <Button title="Cambiar contraseña" />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


export default ResetPasswordScreen;