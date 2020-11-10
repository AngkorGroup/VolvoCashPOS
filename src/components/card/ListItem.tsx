import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { unit } from 'utils/responsive';
import { theme, palette } from 'utils/styles';
import { Status } from 'models/Charge';

const width = Dimensions.get('window').width;

type Mode = 'positive' | 'negative';

interface ListItem {
  title: string;
  subtitle: string;
  value: string;
  mode: Mode;
  status?: Status;
  onPress: Function;
}

const getStyleByStatus = (status: Status) => {
  switch (status) {
    case 'Pending':
      return 'pending';
    case 'Accepted':
      return 'approved';
    case 'Rejected':
    case 'Canceled':
      return 'rejected';
    default:
      return 'approved';
  }
};

const getStatusLabel = (status: Status) => {
  switch (status) {
    case 'Pending':
      return 'Pendiente';
    case 'Accepted':
      return 'Aceptado';
    case 'Rejected':
      return 'Rechazado';
    case 'Canceled':
      return 'Cancelado';
    default:
      return 'Pendiente';
  }
};

const ListItem: React.FC<ListItem> = ({
  title,
  subtitle,
  value,
  mode,
  status = undefined,
  onPress = () => { },
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <View style={styles.leftContainer}>
          <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      {status && (
        <View style={[styles.badge, styles[getStyleByStatus(status)]]}>
          <Text style={styles.statusText} numberOfLines={1}>
            {getStatusLabel(status)}
          </Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <Text style={[styles[mode], styles.number]}>{value}</Text>
      </View>
    </TouchableOpacity>
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
    width: width * 0.44,
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
  approved: {
    ...theme.small,
    ...theme.accepted,
  },
  rejected: {
    backgroundColor: palette.raspberry,
  },
  badge: {
    borderRadius: unit(20),
    width: unit(65),
    height: unit(18),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    alignSelf: 'flex-start',
  },
  title: {
    ...theme.small,
    ...theme.primary,
    marginBottom: unit(5),
    fontSize: unit(13),
    alignSelf: 'flex-start',
  },
  subtitle: {
    ...theme.tiny,
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
    ...theme.tiny,
  },
});

export default ListItem;
