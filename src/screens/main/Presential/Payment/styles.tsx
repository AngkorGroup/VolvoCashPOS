import { StyleSheet } from 'react-native';
import { palette, theme } from 'utils/styles';
import { unit } from 'utils/responsive';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
    ...theme.background,
  },
  container: {
    width: unit(245),
    height: unit(240),
    ...theme.disabledSurface,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    position: 'relative',
    marginBottom: unit(40),
    marginTop: unit(10),
  },
});
