import { StyleSheet } from 'react-native';
import { palette, theme } from 'utils/styles';
import { unit } from 'utils/responsive';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
    ...theme.background,
    position: 'relative'
  },
  container: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: unit(30)
  },
  input: {
    width: '100%',
    marginBottom: unit(20),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: unit(20),
  },
});
