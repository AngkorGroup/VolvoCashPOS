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
import { ON_SITE_STACK, REMOTE_STACK, CHARGE_DETAIL } from 'utils/routes';
import { useNavigation } from '@react-navigation/native';
import { api } from 'utils/api';
import { Charge } from 'models/Charge';
import { getUserName } from 'utils/storage';
import { useDispatch, useSelector } from 'react-redux';
import { setChargeId } from 'utils/redux/chargeId/actions';
import { getUpdateFlag } from 'utils/redux/updateList/reducer';

type CardDetailTab = 'FaceToFace' | 'Remote';

interface Movements {
  type: CardDetailTab;
  flag: boolean;
}

const Movements: React.FC<Movements> = ({ type, flag }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [charges, setCharges] = useState<Charge[]>([]);
  const [filteredMovements, setFilteredMovements] = useState<Charge[]>([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    refresh();
  }, [type, flag]);

  const handleChangeText = (text: string) => {
    const searchText = text.toLocaleLowerCase();
    setQuery(text);
    setFilteredMovements(
      charges.filter((charge) =>
        (charge.displayName || '-').toLocaleLowerCase().includes(searchText),
      ),
    );
  };

  const goChargeDetail = (charge: Charge) => {
    if (charge.status === 'Accepted') {
      dispatch(setChargeId(charge.id));
      navigation.navigate(CHARGE_DETAIL);
    }
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
            title={movement.displayName || '-'}
            subtitle={movement.createdAt}
            value={movement.amount.label}
            status={movement.status}
            mode={'positive'}
            onPress={() => goChargeDetail(movement)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

const CardDetailScreen = () => {
  const [tab, setTab] = useState<CardDetailTab>('FaceToFace');
  const [user, setUser] = useState('');
  const navigation = useNavigation();
  const flag = useSelector(getUpdateFlag);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  }, []);

  getUserName().then((res) => {
    setUser(res || '-');
  });

  return (
    <View style={styles.container}>
      <Header
        title={`Bienvenido, ${user || '-'}`}
        alignment="center"
        rightButton={<ExitButton />}
      />
      <View style={styles.infoContainer}>
        <Button
          title="Cobro Presencial"
          textStyle={styles.tabText}
          onPress={() => navigation.navigate(ON_SITE_STACK)}
          icon={<Icon family="MaterialIcon" name="qr-code-2" size={unit(48)} />}
        />
        <Button
          title="Cobro Remoto"
          textStyle={styles.tabText}
          onPress={() => navigation.navigate(REMOTE_STACK)}
          icon={<Icon family="Fontisto" name="paper-plane" size={unit(45)} />}
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
      {!loading && <Movements type={tab} flag={flag} />}
    </View>
  );
};

export default CardDetailScreen;
