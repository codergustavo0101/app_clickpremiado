import { ScaledSheet } from 'react-native-size-matters';

import themes from '../../themes/themes';

const styles = ScaledSheet.create({

    container:{

        flex:1,
        backgroundColor:'white',
    },

    form:{

        justifyContent:'center',
        alignItems:'center',
    },

    textPrimary:{

        marginTop:'20@s',
        fontFamily:themes.fonts.popinsBold,
        fontSize:'26@s',
        marginBottom:'20@s',
        
    },

    textError:{

        color:'red',
        position:'relative',
        top:-25,

    }
 


})

export default styles