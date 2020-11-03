import React, { useState, useEffect } from 'react';
import Button from 'components/button/Button';
import ListItem from 'components/card/ListItem';
import ExitButton from 'components/header/ExitButton';
import Header from 'components/header/Header';
import Icon from 'components/icon/Icon';
import Search from 'components/input/Search';
import { View, RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import { unit } from 'utils/responsive';
import { ON_SITE_STACK, REMOTE_STACK } from 'utils/routes';
import { useNavigation } from '@react-navigation/native';
import { api } from 'utils/api';
import { Charge } from 'models/Charge';

type CardDetailTab = 'FaceToFace' | 'Remote';

interface Movements {
  type: CardDetailTab;
}

const Movements: React.FC<Movements> = ({ type }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [charges, setCharges] = useState<Charge[]>([]);
  const [filteredMovements, setFilteredMovements] = useState<Charge[]>([]);

  const refresh = () => {
    setLoading(true);
    setCharges([]);
    setFilteredMovements([]);
    api
      .get(`charges?chargeType=${type}`)
      .then((res) => {
        setCharges(res);
        setFilteredMovements(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    refresh();
  }, [type]);

  const handleChangeText = (text: string) => {
    const searchText = text.toLocaleLowerCase();
    setQuery(text);
    setFilteredMovements(
      charges.filter((charge) =>
        charge.displayName.toLocaleLowerCase().includes(searchText),
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
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        style-={styles.list}
        data={filteredMovements}
        keyExtractor={(movement) => movement.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: movement }) => (
          <ListItem
            title={movement.displayName}
            subtitle={movement.createdAt}
            value={movement.amount.label}
            type={type}
            status={movement.status}
            mode={'positive'}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

const CardDetailScreen = () => {
  const [tab, setTab] = useState<CardDetailTab>('FaceToFace');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        title={'Bienvenido, Usuario'}
        alignment="center"
        rightButton={<ExitButton />}
      />
      <View style={styles.infoContainer}>
        <Button
          title="Cobro Presencial"
          onPress={() => navigation.navigate(ON_SITE_STACK)}
          icon={<Icon family="MaterialIcon" name="qr-code-2" size={unit(50)} />}
        />
        <Button
          title="Cobro Remoto"
          onPress={() => navigation.navigate(REMOTE_STACK)}
          icon={<Icon family="Fontisto" name="paper-plane" size={unit(50)} />}
        />
      </View>
      <View style={styles.tabBar}>
        <Button
          style={[
            styles.leftButton,
            styles.button,
            tab === 'FaceToFace' ? styles.active : styles.disabled,
          ]}
          title="Presencial"
          textStyle={
            tab === 'FaceToFace'
              ? styles.activeTextButton
              : styles.disabledTextButton
          }
          onPress={() => setTab('FaceToFace')}
        />
        <Button
          style={[
            styles.rightButton,
            styles.button,
            tab === 'Remote' ? styles.active : styles.disabled,
          ]}
          title="Remoto"
          textStyle={
            tab === 'Remote'
              ? styles.activeTextButton
              : styles.disabledTextButton
          }
          onPress={() => setTab('Remote')}
        />
      </View>
      <Movements type={tab} />
    </View>
  );
};

export default CardDetailScreen;
