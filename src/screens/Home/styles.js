import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    // render Header
    renderHeader:
    {
        flexDirection: 'row',
        marginHorizontal: SIZES.padding,
        alignItems: 'center',
        height: 80,
    },
    renderHeaderText:
    {
        flex: 1,
    },
    renderHeaderName:
    {
        color: COLORS.darkGreen,
        ...FONTS.h2,
    },
    renderHeaderQuestion:
    {
        color: COLORS.gray,
        marginTop: 3,
        ...FONTS.body3,
    },
    renderHeaderProfileImage:
    {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    // Render Search Bar 
    renderSearchBar:
    {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: 10,
    },
    iconsSearch:
    {
        width: 20,
        height: 20,
        tintColor: COLORS.gray,
    },
    textInputSearch:
    {
        marginLeft: SIZES.radius,
        ...FONTS.body3,
    },
    // Render See Recipe Card
    renderSeeRecipeCard:
    {
        flexDirection: 'row',
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        borderRadius: 10,
        backgroundColor: COLORS.lightGreen,
    },
    imageSeeRecipeCardContainer:
    {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageSeeRecipeCard:
    {
        height: 80,
        width: 80,
    },
    textSeeRecipeCardContainer:
    {
        flex: 1,
        paddingVertical: SIZES.radius,
    },
    textSeeRecipeCard:
    {
        width: '70%',
        ...FONTS.body4,
    },
    textSeeRecipeCardButton:
    {
        marginTop: 10,
    },
    textSeeRecipeCardButtonText:
    {
        color: COLORS.darkGreen,
        textDecorationLine: 'underline',
        ...FONTS.h4,
    },
    // Render Trending Section
    renderTrendingSection:
    {
        marginTop: SIZES.padding,
    },
    titleTrendingSection:
    {
        marginHorizontal: SIZES.padding,
        ...FONTS.h2,
    },
    // Render Category Header
    renderCategoryHeader:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: SIZES.padding,
    },
    titleCategorySection:
    {
        flex: 1,
        ...FONTS.h2,
    },
    viewAllText:
    {
        color: COLORS.gray,
        ...FONTS.body4,
    }
});
export default styles;