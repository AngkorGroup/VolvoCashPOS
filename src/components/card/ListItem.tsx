import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { unit } from 'utils/responsive';
import { theme, palette } from 'utils/styles';

const width = Dimensions.get('window').width;

type Mode = 'positive' | 'negative';

type CardDetailTab = 'Presencial' | 'Remoto';

type Status = 'Pendiente' | 'Rechazado' | 'Aprobado' | undefined;

interface ListItem {
  title: string;
  subtitle: string;
  value: string;
  mode: Mode;
  type: CardDetailTab;
  status: Status;
}

const getStyleByStatus = (status: Status) => {
  switch (status) {
    case 'Pendiente':
      return 'pending';
    case 'Aprobado':
      return 'approved';
    case 'Rechazado':
      return 'rejected';
    default:
      return 'approved';
  }
};

const ListItem: React.FC<ListItem> = ({
  title,
  type,
  subtitle,
  value,
  mode,
  status = undefined,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.leftContainer}>
          <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      {type === 'Remoto' && status && (
        <View style={[styles.badge, styles[getStyleByStatus(status)]]}>
          <Text style={styles.statusText} numberOfLines={1}>
            {status}
          </Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <Text style={[styles[mode], styles.number]}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...theme.surface,
    flexDirection: 'row',
    padding: unit(5),
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  leftContainer: {
    alignSelf: 'flex-start',
    width: width * 0.4,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    minWidth: unit(90),
  },
  positive: {
    ...theme.small,
    ...theme.accent,
  },
  negative: {
    ...theme.small,
    ...theme.red,
  },
  pending: {
    backgroundColor: palette.orange,
  },
  approved: {},
  rejected: {
    backgroundColor: palette.raspberry,
  },
  badge: {
    borderRadius: unit(20),
    width: unit(90),
    height: unit(18),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    margin: 5,
  },
  title: {
    ...theme.small,
    ...theme.primary,
    marginBottom: unit(5),
    fontSize: unit(14),
    alignSelf: 'flex-start',
  },
  subtitle: {
    ...theme.small,
    ...theme.secondary,
    marginBottom: unit(5),

    fontSize: unit(12),
    alignSelf: 'flex-start',
  },
  number: {
    fontSize: 13,
  },
  statusText: {
    color: 'white',
    fontSize: unit(12),
  },
});

export default ListItem;
