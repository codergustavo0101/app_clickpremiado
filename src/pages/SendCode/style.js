import { ScaledSheet } from 'react-native-size-matters';

import themes from '../../themes/themes';

const styles = ScaledSheet.create({

    container:{

        flex:1,
        backgroundColor:'white',
    },


    content:{
        paddingTop:'20@s',
        alignItems:'center',
    },

    text:{
        marginTop:'64@s',
        fontFamily:themes.fonts.popinsMedium,
        color:'#572EB0',
        fontSize:'20@s',

    },
    
    textSecondary:{
        marginTop:'15@s',
        textAlign:'center',
        fontFamily:themes.fonts.popinsRegular,
    },

    textMail:{
        marginTop:'20@s',
        fontSize:'15@s',
        fontFamily:themes.fonts.popinsMedium,
        marginBottom:'25@s',
    },

    btn:{
        marginTop:'25@s',
        backgroundColor:'#572EB0',
        width:'251@s',
        height:'44@s',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30

    },

    textBtn:{

        color:'white',
        fontFamily:themes.fonts.popinsMedium,
        fontSize:'15@s',
    },

    row:{

        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'-15@s',
        marginBottom:'20@s',

    }


})

export default styles