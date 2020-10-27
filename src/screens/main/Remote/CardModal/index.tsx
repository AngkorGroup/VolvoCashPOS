import React, { useEffect } from 'react';
import VolvoCard from 'components/card/VolvoCard';
import BackButton from 'components/header/BackButton';
import Header from 'components/header/Header';
import Spacing from 'components/layout/Spacing';
import { View, FlatList, Modal } from 'react-native';
import { unit } from 'utils/responsive';
import styles from './styles';
import cardList from 'mocks/card-list';

interface ICardModal {
  isVisible: boolean;
  setIsVisible: Function;
  setCard: Function
}

const CardModal: React.FC<ICardModal> = ({ isVisible, setIsVisible, setCard }) => {
  const refresh = () => {
  }

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <Modal visible={isVisible} style={styles.container}>
      <Header
        title={'Seleccioanr Tarjetas'}
        alignment="left"
        leftButton={<BackButton onClose={() => { setIsVisible(false); }} />}
      />
      <View style={styles.listContainer}>
        <FlatList
          style-={styles.list}
          data={cardList}
          keyExtractor={(movement) => movement.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: card }) => (
            <VolvoCard
              card={card}
              onPress={() => {
                setCard({ id: card.id, title: card.cardType.name })
                setIsVisible(false);
              }}
            />
          )}
          ItemSeparatorComponent={() => <Spacing size={unit(15)} />}
        />
      </View>
    </Modal>
  );
};

export default CardModal;
