import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { unit } from 'utils/responsive';
import { theme } from 'utils/styles';

const width = Dimensions.get('window').width;

interface ListItem {
  title: string;
  client: string;
  phone: string;
  onPress(): void;
}

const ListItem: React.FC<ListItem> = ({ title, client, phone, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <View style={styles.leftContainer}>
          <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subtitle}>{client}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
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
    width: width * 0.8,
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
});

export default ListItem;
