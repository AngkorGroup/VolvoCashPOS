import Alert from 'components/alert/Alert';
import Icon from 'components/icon/Icon';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const ExitButton = () => {
  const [alert, setAlert] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setAlert(true)}>
        <Icon family="Ionicons" name="exit-outline" />
      </TouchableOpacity>
      <Alert
        visible={alert}
        title="¿Está seguro que desea salir?"
        confirmText="Si"
        cancelText="No"
        onCancel={() => setAlert(false)}
        onConfirm={() => console.log('logout')}
      />
    </>
  );
};

export default ExitButton;
