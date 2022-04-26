import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: COLORS.black
    },
    //Render Header
    renderHeader:
    {
        height: SIZES.height > 700 ? '65%' : '60%',
    },
    imageBackground:
    {
        flex: 1,
        justifyContent: 'flex-end'
    },
    linearGradient:
    {
        height: 200,
        justifyContent: 'flex-end',
        paddingHorizontal: SIZES.padding
    },
    title:
    {
        width: '80%',
        color: COLORS.white,
        ...FONTS.largeTitle,
        lineHeight: 45,
    },
    // Render Detail 
    renderDetail:
    {
        flex: 1,
        paddingHorizontal: SIZES.padding,
    },
    description:
    {
        color: COLORS.gray,
        width: '70%',
        marginTop: SIZES.radius,
        ...FONTS.body3,
    },
    buttonsContainer:
    {
        flex: 1,
        justifyContent: 'center',
    },
    buttonLogin:
    {
        paddingVertical: 18,
        borderRadius: 20,
    },
    buttonSignUp:
    {
        paddingVertical: 18,
        borderRadius: 20,
        borderColor: COLORS.darkLime,
        borderWidth: 1,
        marginTop: SIZES.radius,
    }

});
export default styles;