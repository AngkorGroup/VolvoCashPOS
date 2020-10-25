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
  setClient: Function;
}

interface IClients {
  setClient: Function;
  setIsVisible: Function;
}

const Clients: React.FC<IClients> = ({ setClient, setIsVisible }) => {
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
        renderItem={({ item: client }) => (
          <ListItem
            title={client.displayName}
            subtitle={formatDate(client.date)}
            onPress={() => {
              setIsVisible(false);
              setClient({ id: client.id, name: client.displayName });
            }}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

const ClientModal: React.FC<IClientModal> = ({
  isVisible,
  setIsVisible,
  setClient
}) => {
  return (
    <Modal visible={isVisible} style={styles.container}>
      <Header
        title={'Seleccionar cliente'}
        alignment="left"
        leftButton={
          <BackButton onClose={() => { setIsVisible(false); }
          } />}
      />
      <View style={styles.headerDivider} />
      <Clients setClient={setClient} setIsVisible={setIsVisible} />
    </Modal>
  );
};

export default ClientModal;