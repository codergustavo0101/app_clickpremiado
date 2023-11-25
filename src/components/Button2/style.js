import { ScaledSheet } from 'react-native-size-matters';


import themes from '../../themes/themes'

const styles = ScaledSheet.create({

    button:{
        marginTop:'10@s',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#572EB0',
        width:'291@s',
        height:44,
        borderRadius:30,
        marginBottom:'20@s',
    },

    textPrimary:{
        fontSize:'16@s',
        fontFamily:themes.fonts.popinsBold,
        color:'white',
    }


})

export default styles