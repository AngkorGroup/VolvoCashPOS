import Alert from 'components/alert/Alert';
import Icon from 'components/icon/Icon';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from 'utils/redux/auth/actions';

const ExitButton = () => {
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

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
        onConfirm={() => dispatch(logout())}
      />
    </>
  );
};

export default ExitButton;
