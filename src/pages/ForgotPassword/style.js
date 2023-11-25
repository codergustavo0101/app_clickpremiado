import { ScaledSheet } from 'react-native-size-matters';

import themes from '../../themes/themes';

const styles = ScaledSheet.create({


    container:{

        flex:1,
        backgroundColor:'white',
    },

    containerForm:{
        marginTop:'20@s',
        justifyContent:'center',
        alignItems:'center',
    },

    textPrimary:{

        fontSize:'24@s',
        fontFamily:themes.fonts.popinsMedium
    },

    textSecondary:{
        marginTop:'16@s',
        textAlign:'center',
        fontSize:'16@s',
        marginBottom:'40@s',
        fontFamily:themes.fonts.popinsMedium
    },

    textError:{

        color:'red',
        position:'relative',
        top:-15,

    }


})

export default styles