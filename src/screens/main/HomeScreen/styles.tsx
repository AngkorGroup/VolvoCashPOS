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
  infoContainer: {
    ...theme.surface,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: unit(90),
    padding: unit(20),
    marginVertical: unit(15),
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
    borderWidth: 1,
  },
  leftButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rightButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  active: {
    backgroundColor: palette.ocean,
  },
  disabled: {
    backgroundColor: 'white',
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
  tabBar: {
    flexDirection: 'row',
    height: unit(35),
    justifyContent: 'center',
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
