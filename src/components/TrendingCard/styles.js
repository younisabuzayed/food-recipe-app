import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    button:
    {
        height: 350,
        width: 250,
        borderRadius: SIZES.radius,
        marginTop: SIZES.radius,
        marginRight: 20,
    },
    backgroundImage:
    {
        height: 350,
        width: 250,
        borderRadius: SIZES.radius,
    },
    categoryContainer:
    {
        position: 'absolute',
        top: 20,
        left: 15,
        paddingHorizontal: SIZES.radius,
        paddingVertical: 5,
        backgroundColor: COLORS.transparentGray,
        borderRadius: SIZES.radius,
    },
    category:
    {
        color: COLORS.white,
        ...FONTS.h4,
    },
    recipeCardInfo:
    {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        borderRadius: SIZES.radius,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
    },
    recipeCardDetails:
    {
        flex: 1,
    },
    nameAndBookmarkContainer:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    recipeCardDetailsName:
    {
        width: '70%',
        color: COLORS.white,
        ...FONTS.h3,
        fontSize: 18,
    },
    iconBookmark:
    {
        width: 20,
        height: 20,
        marginRight: SIZES.base,
        tintColor: COLORS.darkGreen,
    },
    durationAndServings:
    {
        color: COLORS.lightGray,
        ...FONTS.body4,
    }
});
export default styles;