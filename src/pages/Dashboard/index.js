import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {View,Text,Image,Alert,Modal} from 'react-native'
import { TouchableOpacity } from 'react-native'

import HeaderDashboard from '../../components/HeaderDashboard'
import AppIntroSlider from 'react-native-app-intro-slider';

import YoutubeIcon from '../../images/icons/YoutubeIcon';
import ProfileIcon from '../../images/icons/Profile';
import DashIcon from '../../images/icons/DashIcon';

import CloseModalIcon from '../../images/icons/CloseModalIcon'

import MoneyIcon from '../../images/icons/MoneyIcon';

import animationGif from '../../images/gifs/f30818962642b74080e6b50110643aae_anim.gif'

import Emoji from '../../images/icons/Emoji'

import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'


import {
  AdMobRewarded,
} from 'expo-ads-admob';

import styles from './style'



const Dashboard = () =>{

  const [value,setValue] = useState(0)
  const [animation,setAnmimation] = useState(false)

  const [modalVisible,setModalVisible] = useState(false)

  const navigation = useNavigation()

  const redirectToProfilePage = () =>{

    navigation.navigate('Profile')

}

async function requestPayment() {


  const mail = await  AsyncStorage.getItem('@mail')
  const response = await api.get(`user/${mail}`)

  const valueInAccount = response.data[0].valueInAccount

  if(valueInAccount == 20.00){

    Alert.alert('TOOP!!','Seu pagamento foi solicitado.')


  }else{

    Alert.alert('Opss..','Valor mínimo para receber é de R$20,00')

  }

}


    const slides = [
        {
          key: 'one',
          title: 'Assista a nossos anúncios e ganhe muito mais :)',
          image: require('../../images/icons/flame-start-up-support.png'),
        },
        {
          key: 'two',
          title: 'Assista a nossos anúncios e ganhe muito mais :)',
          image: require('../../images/icons/flame-start-up-support.png'),
        },
        {
          key: 'three',
          title: 'Assista a nossos anúncios e ganhe muito mais :)',
          image: require('../../images/icons/flame-start-up-support.png'),
        }
      ];

      function renderSlides({item}){

        return(

            <View style={styles.carrousel}>
            <Image style={{width:220,height:220}} source={item.image}/>
            <Text style={styles.titleSlider}>{item.title}</Text>

            </View>

        )

      }

      async function loadAd(){

          setAnmimation(true)
          await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917')
          await AdMobRewarded.requestAdAsync();
          await AdMobRewarded.showAdAsync();
 

          setTimeout(() =>{

            setAnmimation(false)

          },3000)


          /* GET INFO USER */
          const mail = await  AsyncStorage.getItem('@mail')
          const responseUser = await api.get(`user/${mail}`)
          const idUser = await api.get(`user/${mail}`)
          
          /* GET VALUE IN ACCOUNT */
          const valueInDatabase = parseFloat(responseUser.data[0].valueInAccount)

          if(valueInDatabase == 20.00){

            const responseStatus = await api.post(`user/change/status`,{
            
              "id":idUser.data[0].id,
              "status":"true",
              
            })

            const responseCoin = await api.post(`coin`,{
            
              "id":idUser.data[0].id,
              "value":0.01
              
            })

            const responseSetValueAd = await api.post(`users/dashboard/adverts`,{
            
              "value":"1",
              
            })
  

            setTimeout(() =>{

              Alert.alert('Toopp!','Você ganhou R$0,01')
  
  
            },7000)
  

            return false 
          }

          /* CALC COIN */

          const fixedValue = valueInDatabase + 0.01

          if(fixedValue == 20.00){

            
            const responseStatus = await api.put(`user/change/status`,{
            
              "id":idUser.data[0].id,
              "status":"true",
              
            })


          }
        
          const responseCoin = await api.post(`coin`,{
            
            "id":idUser.data[0].id,
            "value":fixedValue.toFixed(2)
            
          })

      
          

          if(responseCoin.status == 200){

            setTimeout(() =>{

              Alert.alert('Toopp!','Você ganhou R$0,01')

              if(fixedValue == 20.00){
                
                

                setModalVisible(true)

                
              }
  
  
            },7000)
  
            
          }else{

            Alert.alert('Opss!','Algo deu errado tenta novamente mais tarde :(')

          }


      }



    return(

      <>

      <Modal 
      
      transparent={true}
      visible={modalVisible}
      animationType='slide'
      onRequestClose={() => setModalVisible(false)}
      style={styles.modal}
      >
          
      <View style={styles.modalContainer}>


      <View style={styles.modalContent}>
      <View style={styles.headerModal}>
      <Text></Text>
      <TouchableOpacity onPress={() => setModalVisible(false)}>
      <CloseModalIcon/>
      </TouchableOpacity>
      </View>
      <Text style={styles.modalTextPrimary}>Parabéns!!!</Text>

      <View style={styles.rowEmojis}>
      <Emoji style={styles.emoji}/>
      <Emoji  style={styles.emoji}/>
      <Emoji  style={styles.emoji}/>
      <Emoji  style={styles.emoji}/>

      </View>

      <Text style={styles.textModalSecondary}>Você acaba de {`\n`} receber um pix em {`\n`} sua conta!</Text>

      <Text style={styles.valuePixModal}>R$20,00</Text>

      

      </View>


      </View>


      </Modal>
        
      <View style={styles.container}>
        

        <HeaderDashboard value={value}/>

        <View style={styles.containerData}>
        <AppIntroSlider
        data={slides}
        renderItem={renderSlides}

        activeDotStyle={{
            
            width:12,
            height:12,
            borderRadius:100,
            backgroundColor:'#3B0182'

        }}
        />

        <View style={styles.containerBtns}>

        <TouchableOpacity style={styles.btnShowAd} onPress={loadAd}>
        {animation == true 
        ?
        <Text style={styles.textBtnAd}>Carregando...</Text>
        :
        <Text style={styles.textBtnAd}>Assistir anúncio</Text>

        }
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnShowAd} onPress={requestPayment}>
        
        <View style={styles.rowBtnAd}>
        <Text style={styles.textBtnAd}>Pedir pagamento </Text>
        <MoneyIcon/>
        </View>
        </TouchableOpacity>

        </View>

        </View>
        

        <View style={styles.bottomBar}>
        
        <TouchableOpacity  style={styles.btnOption} onPress={loadAd}>
        <YoutubeIcon  style={{position:'relative',top:5}}/>
        <Text style={styles.textBtn}>Assistir</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.dash}>
        <View style={styles.circle}>
        <DashIcon/>
        </View>
        </TouchableOpacity>


                
        <TouchableOpacity style={styles.btnOption} onPress={() => redirectToProfilePage()}>
        <ProfileIcon  style={{position:'relative',top:5}}/>
        <Text style={styles.textBtn}>Perfil</Text>
        </TouchableOpacity>

        </View>
        
        
        </View>

        </>
    )

}

export default Dashboard