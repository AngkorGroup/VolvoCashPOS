import { StyleSheet } from 'react-native';
import { theme } from 'utils/styles';
import { unit } from 'utils/responsive';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
    ...theme.background,
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: unit(40),
  },
  container: {
    alignItems: 'center',
  },
  text: {
    ...theme.small,
    ...theme.secondary,
    marginBottom: unit(20),
  },
});
