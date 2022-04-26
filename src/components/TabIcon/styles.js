import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    container:
    {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 50,
    },
    icon:
    {
        width: 30,
        height:30,
    },
    LineIndex:
    {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: COLORS.darkGreen,
        height: 5,
        marginBottom: SIZES.base
    }
});
export default styles;