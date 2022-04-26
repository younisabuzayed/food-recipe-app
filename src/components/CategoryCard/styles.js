import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    card:
    {
        flexDirection:'row',
        backgroundColor: COLORS.gray2,
        borderRadius: SIZES.radius,
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    image:
    {
        width: 100,
        height: 100,
        borderRadius: SIZES.radius,
    },
    detailsContainer:
    {
        width: '65%',
        paddingHorizontal: 20,
    },
    name:
    {
        flex: 1,
        ...FONTS.h2,
    },
    servings:
    {
        color: COLORS.gray,
        ...FONTS.body4,
    }
});
export default styles;