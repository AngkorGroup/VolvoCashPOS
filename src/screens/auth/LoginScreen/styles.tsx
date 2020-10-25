import { StyleSheet } from 'react-native';
import { palette, theme } from 'utils/styles';
import { unit } from 'utils/responsive';

export default StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  safeContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: unit(100)
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: unit(50),
    margin: unit(20),
  },
  container: {
    width: unit(265),
    height: unit(240),
    ...theme.loginFormContainer,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    position: 'relative',
    marginBottom: unit(40),
    marginTop: unit(10),
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: -unit(120),
    right: 0,
  },
  volvoCashLogo: {
    width: 190,
    height: 190,
    flex: 1,
    resizeMode: 'contain',
    marginVertical: unit(20),
  },
  text: {
    fontWeight: '700',
    paddingTop: unit(10),
    color: palette.ocean,
  },
});