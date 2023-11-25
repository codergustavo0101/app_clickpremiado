import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';
const {width,height} = Dimensions.get('screen')
import themes from '../../themes/themes';

const styles = ScaledSheet.create({

    container:{

        flex:1,
        backgroundColor:'white',
    },
   
    bottomBar:{

        width:'100%',
        position:'absolute',
        bottom:0,   
        height:70,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:'#3B0182',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:'10@s',
        paddingLeft:'40@s',
        paddingRight:'40@s',

    },

 
    dash:{
        marginTop:'-56@s',
        backgroundColor:'white',
        height:73,
        width:73,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
    },

    circle:{

        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4800A0',
        height:57,
        width:57,
    },

    containerData:{
        justifyContent:'center',
        marginTop:'20@s',
        height:'450@s',
        
    },

    carrousel:{
        justifyContent:'center',
        alignItems:'center',
    },

    titleSlider:{

        fontFamily:themes.fonts.popinsMedium,
        fontSize:'20@s',
        textAlign:'center',

    },

    btnOption:{

        justifyContent:'center',
        alignItems:'center',  
    },

    textBtn:{
        marginTop:'7@s',
        fontFamily:themes.fonts.popinsRegular,
        color:'white',

    },


    btnShowAd:{
        marginTop:'20@s',
        width:'258@s',
        height:55,
        borderRadius:30,
        backgroundColor:'#3B0182',
        justifyContent:'center',
        alignItems:'center'
    },

    textBtnAd:{

        color:'white',
        fontFamily:themes.fonts.popinsMedium,
        fontSize:'18@s',
    },

    rowBtnAd:{

        flexDirection:'row',
        alignItems:'center',
    },

    containerBtns:{

        justifyContent:'center',
        alignItems:'center'

    },

    modalContainer:{

        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.2)'

    },


    modalContent:{

        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        width:width/1.2,
        height:'312@s',
        borderRadius:16,
    },

    modalTextPrimary:{

        fontFamily:themes.fonts.popinsBold,
        color:'#05BE0C',
        fontSize:'28@s'

    },

    rowEmojis:{

        flexDirection:'row',
        alignItems:'center',
    },

    emoji:{

        marginLeft:5,

    },

    textModalSecondary:{
        marginTop:'15@s',
        fontSize:'21@s',
        textAlign:'center',
        fontFamily:themes.fonts.popinsBold,
    },

    valuePixModal:{
        
        color:'#05BE0C',
        fontFamily:themes.fonts.popinsBold,
        fontSize:'21@s',

    },

    headerModal:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
    }


  

})

export default styles