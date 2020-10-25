import { StyleSheet } from 'react-native';
import { theme } from 'utils/styles';
import { unit } from 'utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...theme.background,
  },
  list: {
    marginHorizontal: unit(30),
    margin: unit(20)
  },
  listContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: unit(30)
  },
  header: {
    ...theme.primary,
    ...theme.medium,
    fontFamily: 'VolvoNovum-Regular',
    marginVertical: unit(10),
  },
});