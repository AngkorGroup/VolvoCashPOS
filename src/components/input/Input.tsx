import Icon, { IconFamily } from '../icon/Icon';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { unit } from 'utils/responsive';
import { theme } from 'utils/styles';

interface InputProps {
  placeholder: string;
  iconFamily?: IconFamily;
  iconName?: string;
  containerStyle?: ViewStyle;
  currency?: string;
}

const Input: React.FC<InputProps & TextInputProps & ViewStyle> = ({
  placeholder,
  iconFamily,
  iconName,
  containerStyle,
  currency,
  ...props
}) => {
  const containerStyles: any[] = [styles.container];
  const inputStyles: any[] = [styles.input];
  if (props.editable === false) {
    containerStyles.push(theme.disabledSurface);
  }
  if (containerStyle) {
    containerStyles.push(containerStyle);
  }
  if (!iconName && !iconFamily && !currency) {
    inputStyles.push(styles.inputMargin);
  }
  return (
    <View style={containerStyles}>
      {iconName && iconFamily && (
        <Icon family={iconFamily} name={iconName} style={styles.icon} />
      )}
      {currency && <Text style={styles.inputMargin}>{currency}</Text>}
      <TextInput
        style={inputStyles}
        numberOfLines={1}
        placeholder={placeholder}
        placeholderTextColor={theme.secondary.color}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...theme.surface,
    ...theme.shadow,
    height: unit(30),
    padding: unit(5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: unit(6),
    position: 'relative',
  },
  inputMargin: {
    marginHorizontal: unit(10),
  },
  formattedContainer: {
    position: 'absolute',
    left: 0,
  },
  input: {
    flex: 1,
    height: unit(30),
    padding: 0,
    ...theme.small,
    ...theme.primary,
    // color: 'transparent',
  },
});

export default Input;
