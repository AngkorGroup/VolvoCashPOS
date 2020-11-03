import { Card } from 'models/Card';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { unit } from 'utils/responsive';
import { theme } from 'utils/styles';

interface VolvoCardProps {
  card: Card;
  onPress(): void;
}

const VolvoCard: React.FC<VolvoCardProps> = ({ card, onPress }) => {
  const bgColor = {
    backgroundColor: card.cardType.color,
  };
  return (
    <TouchableOpacity
      style={[styles.container, bgColor]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.primaryText}>{card.cardType.displayName}</Text>
      <Text style={styles.primaryText}>{card.calculatedBalance.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: unit(15),
    borderRadius: unit(20),
    ...theme.shadow,
    flex: 1,
  },
  primaryText: {
    ...theme.header2,
    ...theme.primaryOverDark,
    lineHeight: unit(60),
    textAlign: 'center',
    fontFamily: 'VolvoBroadProDigital',
    marginTop: unit(5),
  },
});

export default VolvoCard;
