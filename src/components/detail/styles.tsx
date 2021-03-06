import { StyleSheet } from 'react-native';
import { theme } from 'utils/styles';
import { unit } from 'utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...theme.background,
  },
  card: {
    ...theme.surface,
    ...theme.shadow,
    marginVertical: unit(30),
    paddingVertical: unit(60),
    paddingHorizontal: unit(40),
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: unit(70),
    flex: 2,
  },
  button: {
    marginVertical: unit(5),
  },
  shareContainer: {
    marginTop: unit(30),
  },
  amountRow: {
    fontWeight: '700',
  },
  scrollContainer: { width: '100%' },
});
