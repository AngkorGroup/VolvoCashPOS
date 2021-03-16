import { Dimensions, StyleSheet } from 'react-native';
import { theme } from 'utils/styles';
import { unit } from 'utils/responsive';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
    safeContainer: {
        flex: 1,
        ...theme.background,
    },
    keyboardContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: unit(20),
    },
    container: {
        alignItems: 'center',
    },
    containerInput: {
        justifyContent: 'space-around',
        height: height * 0.3,
    },
    text: {
        ...theme.small,
        ...theme.secondary,
        marginBottom: unit(20),
    },
});
