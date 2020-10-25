import { StyleSheet, View } from 'react-native';
import { palette, theme } from 'utils/styles';
import { unit } from 'utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...theme.background,
  },
  search: {
    marginVertical: unit(5),
  },
  headerDivider: {
    ...theme.disabledSurface,
    height: unit(20),
  },
  activeTextButton: {
    fontSize: unit(15),
    color: 'white',
  },
  disabledTextButton: {
    fontSize: unit(15),
  },
  button: {
    height: unit(27),
    width: unit(150),
    borderColor: palette.ocean,
    borderWidth: unit(1),
  },
  balanceLabel: {
    ...theme.small,
    ...theme.secondary,
  },
  balanceText: {
    ...theme.large,
    ...theme.primary,
    marginTop: unit(5),
  },
  list: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: unit(10),
    paddingBottom: unit(0),
    ...theme.surface,
  },
  divider: {
    height: 1.5,
    width: '100%',
    ...theme.disabledSurface,
  },
});
