import React, { FC, useCallback, useState } from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  TextInput,
} from 'react-native';

import { styles } from './Input';

const VALID = /^[1-9]{1}[0-9]*$/;

interface Props {
  max?: number;
  onValueChange: (value: number) => void;
  style?: StyleProp<TextStyle>;
  value: number;
  placeholder: string;
}

const CurrencyInput: FC<Props> = ({
  max = Number.MAX_SAFE_INTEGER,
  onValueChange,
  style = { marginBottom: 0 },
  value,
  placeholder,
}) => {
  const valueAbsTrunc = Math.trunc(Math.abs(value));
  if (
    value !== valueAbsTrunc ||
    !Number.isFinite(value) ||
    Number.isNaN(value)
  ) {
    throw new Error('invalid value property');
  }
  const [inputHeight, setInputHeight] = useState(0);
  const [inputWidth, setInputWidth] = useState(0);
  const handleChangeText = useCallback((text: string) => {
    if (text === '') {
      onValueChange(0);
      return;
    }
    if (!VALID.test(text)) {
      return;
    }
    const nextValue = parseInt(text, 10);
    if (nextValue > max) {
      return;
    }
    onValueChange(nextValue);
  }, []);
  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { height, width } = event.nativeEvent.layout;
    setInputHeight(height);
    setInputWidth(width);
  }, []);
  const valueInput = value === 0 ? '' : value.toString();
  const valueDisplay = (value / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const { marginBottom } = StyleSheet.flatten(style);

  return (
    <>
      <View style={[styles.container, { justifyContent: 'flex-start' }]}>
        <Text onLayout={handleLayout} style={[style]}>
          {valueDisplay}
        </Text>
      </View>
      <TextInput
        contextMenuHidden
        placeholder={placeholder}
        keyboardType="numeric"
        onChangeText={handleChangeText}
        value={valueInput}
        style={[
          {
            opacity: 0,
            marginBottom,
            marginTop: -1 * inputHeight,
          },
        ]}
      />
    </>
  );
};

export default CurrencyInput;
