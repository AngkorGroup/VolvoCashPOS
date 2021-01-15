import Button from 'components/button/Button';
import ShortInput from 'components/input/ShortInput';
import React from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { unit } from 'utils/responsive';
import Header from 'components/header/Header';
import styles from './styles';

const ChangePasswordScreen = () => {
    return (
        <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
            <Header title={'Cambiar contraseña'} alignment="left" />
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
                            placeholder="Código correo"
                            keyboardType="numeric"
                            iconFamily="SimpleLineIcons"
                            iconName="envelope"
                        />
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
};

export default ChangePasswordScreen;
