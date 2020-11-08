import { StyleSheet } from 'react-native';
import { theme, palette } from 'utils/styles';
import { unit } from 'utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...theme.background,
  },
  list: {
    marginHorizontal: unit(30),
    margin: unit(20),
  },
  listContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: unit(10),
    borderLeftWidth: 5,
    borderLeftColor: palette.ocean,
  },
  headerDivider: {
    ...theme.disabledSurface,
    height: unit(20),
  },
  header: {
    ...theme.primary,
    ...theme.medium,
    fontFamily: 'VolvoNovum-Regular',
    marginVertical: unit(10),
  },
  divider: {
    height: 1,
    width: '83%',
    alignSelf: 'flex-end',
    backgroundColor: palette.ocean,
  },
  fullDivider: {
    height: 1,
    alignSelf: 'flex-end',
    width: '100%',
    backgroundColor: palette.ocean,
  },
});
