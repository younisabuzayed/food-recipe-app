import { StyleSheet, StatusBar } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    renderItem:
    {
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginVertical: 5,
    },
    renderItemIconContainer:
    {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
    },
    renderItemIcon:
    {
        height:40,
        width: 40,
    },
    renderItemDesc:
    {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    renderItemDescText:
    {
        ...FONTS.body3,
    },
    renderItemQuantity:
    {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    renderItemQuantityText:
    {
        ...FONTS.body3,
    },
    // Render Recipe Card Header
    renderRecipeCardHeader:
    {
        marginTop: -1000,
        paddingTop: 1000,
        alignItems:'center',
        overflow:'hidden',
    },
    image:
    {
        width:'200%',
    },
    // Recipe Creator Card Info
    recipeCreatorContainer:
    {
        position: 'absolute',
        bottom: 10,
        left: 30,
        right: 30,
        height: 80,
    },
    recipeCreatorCardInfo:
    {
        flex: 1,
        borderRadius: SIZES.radius,
    },
    recipeCreatorCardDetail:
    {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    imageProfileContainer:
    {
        width: 40,
        height: 40,
        marginLeft: 20,
    },
    imageProfile:
    {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    labelsContainer:
    {
        flex: 1,
        marginHorizontal: 20,
    },
    labelByText:
    {
        color: COLORS.lightGray2,
        ...FONTS.body4,
    },
    labelNameText:
    {
        color: COLORS.white2,
        ...FONTS.h3,
    },
    recipeCreatorCardDetailBtn:
    {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.lightGreen1,
    },
    iconRightArrow:
    {
        width: 15,
        height: 15,
        tintColor: COLORS.lightGreen1,
    },
    // Render Header Bar
    renderHeaderBar:
    {
        position: 'absolute',
        paddingTop: 80,
        top: 0,
        right: 0,
        left: 0,
        height: 50,
        paddingBottom: 10,
        paddingHorizontal: SIZES.padding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    overlay:
    {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 130,
        backgroundColor: COLORS.black,
    },
    headerBarTitle:
    {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    backButton:
    {
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        backgroundColor: COLORS.transparentBlack5,
    },
    iconBack:
    {
        width: 15,
        height: 15,
        tintColor: COLORS.lightGray,
    },
    bookmarkButton:
    {
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBookmark:
    {
        width: 30,
        height: 30,
        tintColor: COLORS.darkGreen,
    },
    // Render Recipe Info
    renderRecipeInfo:
    {
        flexDirection: 'row',
        height: 130,
        width: SIZES.width,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
    },
    recipeInfoTitleContainer:
    {
        flex: 1.5,
        justifyContent: 'center',
    },
    recipeInfoName:
    {
        ...FONTS.h2,
    },
    recipeInfoServing:
    {
        ...FONTS.body4,
        marginTop: 5,
        color: COLORS.lightGray2,
    },
    viewersContainer:
    {
        flex: 1,
        justifyContent: 'center',
    },
    // Render Ingredient Header
    renderIngredientHeader:
    {
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginTop: SIZES.radius,
        marginBottom: SIZES.padding,
    },
    ingredientHeaderTitle:
    {
        flex: 1,
        ...FONTS.h3,
    },
    ingredientHeaderItems:
    {
        color: COLORS.lightGray2,
        ...FONTS.body4,
    }
});
export default styles;