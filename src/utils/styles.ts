import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';
import { unit } from './responsive';

export const palette = {
  ocean: '#16A6C9',
  white: '#FFFFFF',
  black: '#000000',
  granite: '#4D4E63',
  slate: '#919296',
  sky: '#BADCE6',
  fog: '#d8d7d5',
  raspberry: '#D84451',
  orange: '#DD7610',
  grass: '#78B833',
};

export const theme = {
  shadow: {
    // ios
    shadowOffset: { width: 0, height: 5 },
    shadowColor: Color(palette.black).alpha(0.1).toString(),
    shadowOpacity: unit(30),
    // android
    elevation: 3,
  },
  surface: {
    backgroundColor: palette.white,
  },
  disabledSurface: {
    backgroundColor: Color(palette.fog).alpha(0.5).toString(),
  },
  background: {
    backgroundColor: Color(palette.sky).alpha(0.1).toString(),
  },
  loginFormContainer: {
    backgroundColor: Color(palette.fog).alpha(0.8).toString(),
  },
  accent: {
    color: palette.ocean,
  },
  accepted: {
    backgroundColor: palette.grass,
  },
  primary: {
    color: palette.granite,
  },
  primaryOverDark: {
    color: palette.white,
  },
  secondary: {
    color: palette.slate,
  },
  red: {
    color: palette.raspberry,
  },
  header1: {
    fontSize: unit(70),
    fontFamily: 'VolvoNovum-Regular',
  },
  header2: {
    fontSize: unit(48),
    fontFamily: 'VolvoNovum-Regular',
  },
  header3: {
    fontSize: unit(28),
    fontFamily: 'VolvoNovum-Regular',
  },
  large: {
    fontSize: unit(24),
    fontFamily: 'VolvoNovum-Medium',
  },
  medium: {
    fontSize: unit(18),
    fontFamily: 'VolvoNovum-Medium',
  },
  small: {
    fontSize: unit(13),
    fontFamily: 'VolvoNovum-Medium',
  },
  tiny: {
    fontSize: unit(11),
    fontFamily: 'VolvoNovum-Regular',
  },
};

EStyleSheet.build({});
