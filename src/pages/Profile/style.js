import { ScaledSheet } from 'react-native-size-matters';

import themes from '../../themes/themes';

const styles = ScaledSheet.create({

    container:{

        flex:1,
        backgroundColor:'white',
    },

    column1:{

        flex:1,
        backgroundColor:'#330867'
    },

     column2:{

        flex:1,
        paddingTop:'26@s',
        paddingLeft:'38@s',
        marginTop:'-20@s',
        backgroundColor:'white',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },

    column1Header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:'60@s',
    },

    backIcon:{

        position:'relative',
        left:'-89@s',
        
    },

    textPrimary:{

        color:'white',
        fontFamily:themes.fonts.popinsMedium,
        fontSize:'22@s',
    },
    
    profileUser:{

        backgroundColor:'white',
        height:111,
        width:111,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
    },

    column2Header:{

        marginTop:'50@s',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:'40@s',

    },

    cameraIcon:{

        position:'absolute',
        top:'60@s',
        right:'-10@s',
        
    },

    columnInfo:{
        width:'160@s',
        marginLeft:'33@s',
    },

    textName:{
        fontFamily:themes.fonts.popinsMedium,
        color:'white',
        fontSize:'16@s',
    },

    textNumber:{
        marginTop:'7@s',
        fontFamily:themes.fonts.popinsMedium,
        color:'white',
        fontSize:'12@s',
    },

    textSecondary:{
        color:'#3B0182',
        fontFamily:themes.fonts.popinsMedium,
        fontSize:'25@s',
    },

    containerInput:{

        marginTop:'20@s',
        width:'260@s',

    },

    btnPrimary:{

        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#572EB0',
        height:48,
        borderRadius:15,  
    },

    btnSecondary:{
        marginTop:'21@s',
        justifyContent:'center',
        alignItems:'center',
        height:42,
        borderRadius:15,  
    },

    textBtn:{
        fontFamily:themes.fonts.popinsBold,
        fontSize:'16@s',
        color:'white',
    },

    textBtnSecondary:{
        fontFamily:themes.fonts.popinsBold,
        fontSize:'16@s',
        color:'#EC0000',

    },

    textError:{

        color:'red',
        position:'relative',
        top:-19,

    }



})

export default styles