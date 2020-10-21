import Button from 'components/button/Button';
import ListItem from 'components/card/ListItem';
import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import Icon from 'components/icon/Icon';
import Search from 'components/input/Search';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { unit } from 'utils/responsive';
import { palette, theme } from 'utils/styles';
import movements from 'mocks/movements';
import { formatDate } from 'utils/moment';

type CardDetailTab = 'Presencial' | 'Remoto';

interface Movements {
  type: CardDetailTab;
}

const Movements: React.FC<Movements> = ({ type }) => {
  const [query, setQuery] = useState('');
  const [filteredMovements, setFilteredMovements] = useState(movements);

  const handleChangeText = (text: string) => {
    setQuery(text);
    setFilteredMovements(
      movements.filter(
        (movement) =>
          movement.displayName.includes(text) ||
          formatDate(movement.date).includes(text) ||
          movement.money.toString().includes(text),
      ),
    );
  };

  return (
    <View style={styles.listContainer}>
      <Search
        value={query}
        onChangeText={handleChangeText}
        placeholder="Buscar en mis movimientos"
        style={styles.search}
      />
      <FlatList
        style-={styles.list}
        data={filteredMovements}
        keyExtractor={(movement) => movement.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: movement }) => (
          <ListItem
            title={movement.displayName}
            subtitle={formatDate(movement.date)}
            value={movement.money.toString()}
            type={type}
            status={movement.status}
            mode={movement.type === 'in' ? 'positive' : 'negative'}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

const CardDetailScreen = () => {
  const [tab, setTab] = useState<CardDetailTab>('Presencial');

  return (
    <View style={styles.container}>
      <Header
        title={'Bienvenido, Usuario'}
        alignment="left"
        leftButton={<BackButton />}
      />
      <View style={styles.infoContainer}>
        <Button
          title="Cobro Presencial"
          onPress={() => { }}
          icon={<Icon family="MaterialIcon" name="qr-code-2" size={unit(50)} />}
        />
        <Button
          title="Cobro Remoto"
          onPress={() => { }}
          icon={<Icon family="Fontisto" name="paper-plane" size={unit(50)} />}
        />
      </View>
      <View style={styles.tabBar}>
        <Button
          style={[
            styles.leftButton,
            styles.button,
            tab === 'Presencial' ? styles.active : styles.disabled,
          ]}
          title="Presencial"
          textStyle={
            tab === 'Presencial'
              ? styles.activeTextButton
              : styles.disabledTextButton
          }
          onPress={() => setTab('Presencial')}
        />
        <Button
          style={[
            styles.rightButton,
            styles.button,
            tab === 'Remoto' ? styles.active : styles.disabled,
          ]}
          title="Remoto"
          textStyle={
            tab === 'Remoto'
              ? styles.activeTextButton
              : styles.disabledTextButton
          }
          onPress={() => setTab('Remoto')}
        />
      </View>
      <Movements type={tab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...theme.background,
  },
  search: {
    marginVertical: unit(5),
  },
  infoContainer: {
    ...theme.surface,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: unit(90),
    padding: unit(20),
    marginVertical: unit(15),
  },
  activeTextButton: {
    fontSize: unit(15),
    color: 'white',
  },
  disabledTextButton: {
    fontSize: unit(15),
  },
  button: {
    height: unit(27),
    width: unit(150),
    borderColor: palette.ocean,
    borderWidth: unit(1),
  },
  leftButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rightButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  active: {
    backgroundColor: palette.ocean,
  },
  disabled: {
    backgroundColor: 'white',
  },
  balanceLabel: {
    ...theme.small,
    ...theme.secondary,
  },
  balanceText: {
    ...theme.large,
    ...theme.primary,
    marginTop: unit(5),
  },
  tabBar: {
    flexDirection: 'row',
    height: unit(35),
    justifyContent: 'center',
  },
  list: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: unit(10),
    paddingBottom: unit(0),
    ...theme.surface,
  },
  divider: {
    height: 1.5,
    width: '100%',
    ...theme.disabledSurface,
  },
});

export default CardDetailScreen;
