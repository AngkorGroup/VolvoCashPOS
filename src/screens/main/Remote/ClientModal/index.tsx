import React, { useState, useEffect } from 'react';
import ListItem from 'components/card/ClientListItem';
import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import Search from 'components/input/Search';
import { View, Modal, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import { api } from 'utils/api';
import { palette } from 'utils/styles';
import { Contact } from 'models/Contact';

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
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);

  const getContacts = () => {
    const url = `contacts${query && `?query=${query}`}`;
    setLoading(true);
    api
      .get(url)
      .then((res) => {
        setContacts(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getContacts();
  }, [query]);

  const handleChangeText = (text: string) => {
    setQuery(text);
  };

  return (
    <View style={styles.listContainer}>
      <Search
        value={query}
        onChangeText={handleChangeText}
        placeholder="Buscar cliente"
        style={styles.search}
      />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={palette.ocean}
          animating={true}
        />
      ) : (
          <FlatList
            style-={styles.list}
            data={contacts}
            keyExtractor={(movement) => movement.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: client }) => (
              <ListItem
                title={client.fullName}
                phone={client.phone || '-'}
                client={client.client.name || '-'}
                onPress={() => {
                  setIsVisible(false);
                  console.warn(client);
                  setClient({
                    id: client.id,
                    name: client.fullName,
                    documentType: client.documentType.abbreviation,
                    documentNumber: client.documentNumber,
                  });
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
          />
        )}
    </View>
  );
};

const ClientModal: React.FC<IClientModal> = ({
  isVisible,
  setIsVisible,
  setClient,
}) => {
  return (
    <Modal visible={isVisible} style={styles.container}>
      <Header
        title={'Seleccionar cliente'}
        alignment="left"
        leftButton={
          <BackButton
            onClose={() => {
              setIsVisible(false);
            }}
          />
        }
      />
      <View style={styles.headerDivider} />
      <Clients setClient={setClient} setIsVisible={setIsVisible} />
    </Modal>
  );
};

export default ClientModal;
