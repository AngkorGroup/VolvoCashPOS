import Alert from 'components/alert/Alert';
import Icon from 'components/icon/Icon';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from 'utils/redux/auth/actions';
import { unit } from 'utils/responsive';
import { theme } from 'utils/styles';

const ExitButton = () => {
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity onPress={() => setAlert(true)}>
        <View style={styles.container}>
          <Icon style={styles.icon} family="Ionicons" name="exit-outline" />
          <Text>Cerrar sesión</Text>
        </View>
      </TouchableOpacity>
      <Alert
        visible={alert}
        title="¿Está seguro que desea salir?"
        confirmText="Si"
        cancelText="No"
        onCancel={() => setAlert(false)}
        onConfirm={() => dispatch(logout())}
      />
    </>
  );
};

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    ...theme.surface,
    width: width * 1,
    padding: unit(10),

  },
  icon: {
    marginHorizontal: unit(5),
  },
})

export default ExitButton;
