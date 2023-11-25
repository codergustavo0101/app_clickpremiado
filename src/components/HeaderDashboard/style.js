import { ScaledSheet } from 'react-native-size-matters';

import themes from '../../themes/themes';

const styles = ScaledSheet.create({

  
    header:{

        paddingLeft:'36@s',
        paddingRight:'36@s',
        height:'130@s',
        backgroundColor:'#3B0182',
        borderRadius:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },

    textPrimary:{

        fontFamily:themes.fonts.popinsMedium,
        fontSize:'16@s',
        color:'white',
    },

    profileUser:{

        backgroundColor:'white',
        height:61,
        width:61,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
    },

    columnUser:{

        paddingTop:'20@s',

    },

    rowWallet:{
        marginTop:'9@s',
        flexDirection:'row',   
    },

    textValue:{
        marginLeft:'5@s',
        height:'23@s',
        fontFamily:themes.fonts.popinsMedium,
        color:'white',


    }


})

export default styles