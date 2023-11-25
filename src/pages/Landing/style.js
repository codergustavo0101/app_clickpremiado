import { ScaledSheet } from 'react-native-size-matters';

import themes from '../../themes/themes';

const styles = ScaledSheet.create({

    container:{

        flex:1,
        paddingTop:'17@s',
        backgroundColor:'#330867',
        alignItems:'center',
        justifyContent:'center',
    },
    
    textPrimary:{
        fontFamily:themes.fonts.popinsBold,
        color:'white',
        fontSize:'25@s',
        marginBottom:'30@s'
    },

    btn:{
        marginTop:'25@s',
        justifyContent:'center',
        alignItems:'center',
        width:'291@s',
        height:44,
        borderRadius:30,
    },

    textBtn:{
        fontFamily:themes.fonts.popinsBold,
        fontSize:'16@s',
        color:'white',
    },

    textVersion:{
        marginTop:'40@s',
        fontFamily:themes.fonts.popinsBold,
        fontSize:'12@s',
        color:'white',

    },

    messageError:{
        fontFamily:themes.fonts.popinsBold,
        fontSize:'12@s',
        color:'#f01945',
        marginTop:'-20@s',
        marginBottom:'20@s'

    },

    messageSucess:{

        fontFamily:themes.fonts.popinsBold,
        fontSize:'12@s',
        color:'#0db2ac',
        marginTop:'-20@s',
        marginBottom:'20@s'
    },

    containerInputs:{

        width:'280@s',
    },

    row:{

        alignItems:'flex-end',
        marginBottom:'20@s',
    },

    textForgotPassword:{
        fontFamily:themes.fonts.popinsBold,
        marginTop:'-19@s',
        color:'white',

    },

    messageErrorInput:{

        color:'#f01945',
        position:'relative',
        top:-35,
        fontFamily:themes.fonts.popinsBold,


    }

    


})

export default styles