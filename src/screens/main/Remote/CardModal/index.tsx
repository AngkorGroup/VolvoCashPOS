import React, { useEffect, useState } from 'react';
import VolvoCard from 'components/card/VolvoCardItem';
import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import { View, FlatList, Modal, ActivityIndicator } from 'react-native';
import styles from './styles';
import { api } from 'utils/api';
import { Card } from 'models/Card';

interface ICardModal {
  isVisible: boolean;
  setIsVisible: Function;
  setCard: Function;
  clientId: number | undefined;
}

const CardModal: React.FC<ICardModal> = ({
  isVisible,
  setIsVisible,
  setCard,
  clientId,
}) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  const getCards = () => {
    setLoading(true);
    api
      .get(`contacts/${clientId}/cards`)
      .then((res) => {
        setCards(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCards();
  }, [clientId]);

  if (loading) {
    return <ActivityIndicator animating={true} />;
  }

  return (
    <Modal visible={isVisible} style={styles.container}>
      <Header
        title={'Seleccionar Tarjeta'}
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
      <View style={styles.listContainer}>
        <View style={styles.fullDivider} />
        <FlatList
          style-={styles.list}
          data={cards}
          keyExtractor={(movement) => movement.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: card }) => (
            <VolvoCard
              card={card}
              onPress={() => {
                setCard({
                  cardToken: card.cardToken,
                  title: card.cardType.name,
                });
                setIsVisible(false);
              }}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
        <View style={styles.fullDivider} />
      </View>
    </Modal>
  );
};

export default CardModal;
