import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './style'

import WalletIcon from '../../images/icons/Wallet'

import InputMask from '../InputMask'
import { TextInputMask } from 'react-native-masked-text'

import UserDash from '../../images/icons/UserDash';
import api from '../../services/api'

import {useNavigation} from '@react-navigation/native'

const HeaderDashboard = ({value}) =>{

    const [name,setName] = useState()

    const [valueInAccount,setValueInAccount] = useState()
    const [image,setImage] = useState()

    const navigation = useNavigation()
    

    const redirectToProfilePage = () =>{

        navigation.navigate('Profile')
    
      }
      
      async function getData(){

        const mail = await  AsyncStorage.getItem('@mail')
        const response = await api.get(`user/${mail}`)


        setValueInAccount(response.data[0].valueInAccount)

        const name = response.data[0].name

        const arrayName = name.split(' ')

        setName(arrayName[0])

        console.log(image)
        
        
        setImage(response.data[0].image)

      }
  
      useEffect(() =>{

        getData()

      })


      React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          getData()
  
        });
        return unsubscribe;
      }, [navigation]);
      
    return(

        <View style={styles.header}>
        
        <View style={styles.columnUser}>
        <Text style={styles.textPrimary}>Bem vindo, {name}</Text>
        <View style={styles.rowWallet}>
        <WalletIcon/>
        <Text style={styles.textValue}>Saldo:</Text>
        <TextInputMask type="money" editable={false} value={valueInAccount} style={styles.textValue}  />
        </View>
        </View>

        <TouchableOpacity style={styles.profileUser} onPress={() => redirectToProfilePage()}>
          
        {image == undefined 
        ?
        <UserDash/>

        :
        <Image source={{uri: `data:image/;base64,${image}`}} style={{width:53,height:53,borderRadius:100}} />

        }


        </TouchableOpacity>


        </View>


    )

}

export default HeaderDashboard