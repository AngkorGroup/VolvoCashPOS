import React, { useState } from 'react';
import ListItem from 'components/card/ClientListItem';
import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import Search from 'components/input/Search';
import { View, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import movements from 'mocks/movements';
import { formatDate } from 'utils/moment';

interface IClientModal {
  isVisible: boolean;
  setIsVisible: Function;
}

const Clients: React.FC<any> = () => {
  const [query, setQuery] = useState('');
  const [filteredMovements, setFilteredMovements] = useState(movements);

  const handleChangeText = (text: string) => {
    const searchText = text.toLocaleLowerCase();
    setQuery(searchText);
    setFilteredMovements(
      movements.filter(
        (movement) =>
          movement.displayName.toLocaleLowerCase().includes(searchText)
      ),
    );
  };

  return (
    <View style={styles.listContainer}>
      <Search
        value={query}
        onChangeText={handleChangeText}
        placeholder="Buscar cliente"
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
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

const ClientModal: React.FC<IClientModal> = ({ isVisible, setIsVisible }) => {
  return (
    <Modal visible={isVisible} style={styles.container}>
      <Header
        title={'Seleccionar cliente'}
        alignment="left"
        leftButton={<BackButton onClose={() => { setIsVisible(false); }} />}
      />
      <View style={styles.headerDivider} />
      <Clients />
    </Modal>
  );
};

export default ClientModal;
