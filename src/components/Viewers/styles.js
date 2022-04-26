import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants';
const styles = StyleSheet.create({
    noViewers:
    {
        alignItems: 'center',
        justifyContent: 'center',
    },
    noViewersText:
    {
        color: COLORS.lightGray2,
        ...FONTS.body4,
    },
    more4Viewers:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    more4ViewersList:
    {
        height: 50,
        width: 50,
    },
    more4ViewersImage:
    {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    more4ViewersNumber:
    {
        color: COLORS.lightGray2,
        textAlign: 'right',
        ...FONTS.body4,
        lineHeight: 18,
    },
    viewers:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    viewersNumber:
    {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: COLORS.darkGreen,
        marginLeft: -20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewersNumberText:
    {
        color: COLORS.white,
        ...FONTS.body4,
    }
});
export default styles;