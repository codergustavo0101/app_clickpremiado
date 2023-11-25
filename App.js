import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react'
import {View} from 'react-native'

import AppStack from './src/routes/AppStack';
import {NavigationContainer} from '@react-navigation/native'
import {useFonts,Poppins_400Regular,Poppins_600SemiBold,Poppins_700Bold,Poppins_500Medium} from '@expo-google-fonts/poppins';
import LottieView from 'lottie-react-native';

export default function App() {
  
  const [animation,setAnmiation] = useState()

  let [fontsLoaded] = useFonts({

    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium

  })

  useEffect(() =>{

    setAnmiation(true)      

    if(fontsLoaded != false){

      setTimeout(() =>{

        setAnmiation(false)


      },100)

    }
   
    setTimeout(() =>{

      setAnmiation(false)      

    },2000)
    

  },[])
  


  return (
    <>

    {animation == true 
    
    ?

    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

      <LottieView 
        loop={true} 
        autoPlay 
        style={{
          width: 450,
          height: 450,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./src/images/gifs/88140-rocket-livetrade.json')}
      />

    </View>
  
    :

    <NavigationContainer>
    <AppStack/>
    </NavigationContainer>

    }

    </>
  );
}

