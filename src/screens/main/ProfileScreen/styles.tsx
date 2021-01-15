import { Dimensions, StyleSheet } from 'react-native';
import { theme } from 'utils/styles';
import { unit } from 'utils/responsive';

const width = Dimensions.get('window').width;
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
        margin: unit(15),
    },
    container: {
        height: height * 0.32,
        justifyContent: 'space-between',
    },
    text: {
        ...theme.medium,
        ...theme.secondary,
    },
    textName: {
        ...theme.large,
        fontWeight: '600',
        marginBottom: unit(10),
    },
    containerBox: {
        flexDirection: 'row',
        width: width * 1,
        ...theme.surface,
        padding: unit(10),
    },
    containerText: {
        flexDirection: 'column',
        width: width * 1,
        ...theme.surface,
        justifyContent: 'center',
        alignItems: 'center',
        padding: unit(10),
    },
    icon: {
        marginHorizontal: unit(5),
    },
});
