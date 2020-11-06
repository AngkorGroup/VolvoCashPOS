import { useNavigation } from '@react-navigation/native';
import Icon from 'components/icon/Icon';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface IBackButton {
  onClose?: Function;
}

const BackButton = ({ onClose }: IBackButton) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => (onClose ? onClose() : navigation.goBack())}>
      <Icon family="MaterialIcon" name="arrow-back-ios" />
    </TouchableOpacity>
  );
};

export default BackButton;
