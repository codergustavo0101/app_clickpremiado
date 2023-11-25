import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,Image,Alert} from 'react-native'

import styles from './style'

import BackIconProfile from '../../images/icons/BackIconProfile'
import { TouchableOpacity } from 'react-native'
import CameraIcon from '../../images/icons/CameraIcon';

import UserProfileIcon from '../../images/icons/UserProfileIcon'

import InputMaskProfile from '../../components/InputMaskProfile'
import InputProfile from '../../components/InputProfile'



import { useFocusEffect, useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

import UserDash from '../../images/icons/UserDash2'


import * as ImagePicker from 'expo-image-picker';


const  Profile = () =>{

    
    const [image, setImage] = useState(null);


    /* DATA USER */

    const [cpf,setCpf] = useState()
    const [name,setName] = useState()
    const [mail,setMail] = useState()

    const [phone,setPhone] = useState()
    const [pix,setPix] = useState()

    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()

    const [imageBase64,setImagebase64] = useState()

    /* ERROR MESSAGES */
    const [errorPassword,setErrorPassword] = useState()


    const navigation = useNavigation()

    const redirectToDashboardPage = () =>{

        navigation.navigate('Dashboard')

    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64:true,
        });
    
        setImagebase64(result.base64);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };
    

    async function update(){

      if(password != confirmPassword){

        setErrorPassword('Senhas devem ser iguais!')
        return false
      }else{

        setErrorPassword('')

      }


      const infoId = await api.get(`user/${mail}`)

      const response = await api.put('users',{

        id:infoId.data[0].id,
        name:name,
        cpf:cpf,
        phone:phone,
        mail:mail,
        password_hash:password,
        image:imageBase64,
        pix:pix

      })

      if(response.status == 200){

        Alert.alert('Tooop!','Dados alterados com sucesso :)')

      }

      


    }

    async function getData(){

      const mail = await  AsyncStorage.getItem('@mail')

      const response = await api.get(`user/${mail}`)

      setCpf(response.data[0].cpf)
      setName(response.data[0].name)
      setMail(response.data[0].mail)
      setImagebase64(response.data[0].image)

      setPhone(response.data[0].phone)
      setPix(response.data[0].pix)

    }
    async function exitApp(){

      AsyncStorage.removeItem('@TOKEN')
      navigation.navigate('Landing')

    }

    useEffect(() =>{

      getData()


    },[])


    return(

        <View style={styles.container}>

        <View style={styles.column1}>

        <View style={styles.header}>

        <View style={styles.column1Header}>
        <TouchableOpacity onPress={() => redirectToDashboardPage()}>
        <BackIconProfile style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.textPrimary}>Perfil</Text>
        </View>

        
        <View style={styles.column2Header}>

        <TouchableOpacity style={styles.profileUser} onPress={() => pickImage()}>

        {image != null 
        ?
    
        <Image source={{ uri: image }} style={{ width:88,height:88,borderRadius:100}} />

        :

        imageBase64 != undefined 
        
        ?

        <Image source={{uri: `data:image/;base64,${imageBase64}`}} style={{width:93,height:93,borderRadius:100}} />

        :

        
        <UserDash style={{width:120,height:120}}/>

        }


        <View style={styles.cameraIcon}>
        <CameraIcon/>
        </View>
        </TouchableOpacity>

        <View style={styles.columnInfo}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textNumber}>{phone}</Text>
        </View>

        </View>


        </View>
        

        </View>

        <View style={styles.column2}>

        <Text style={styles.textSecondary}>Dados de acesso</Text>
        
        <ScrollView>

        <View style={styles.containerInput}>

        <InputMaskProfile  icon={'cpf'} value={cpf} type={'cpf'} onChangeText={setCpf} />
        <InputProfile icon={'userIcon'}  value={name} onChangeText={setName}/>
        <InputProfile icon={'mailProfile'} value={mail} onChangeText={setMail}  />

        <InputMaskProfile icon={'phone'} value={phone} type={'cel-phone'} onChangeText={setPhone} />
        <InputProfile icon='pix' placeholder={'Seu pix'} onChangeText={setPix} value={pix} />
        <InputProfile icon='password' password={true} placeholder={'Senha'} onChangeText={setPassword} />

        <InputProfile icon='password' password={true} placeholder={'Confirme sua senha'} onChangeText={setConfirmPassword} />
        {errorPassword != undefined ? <Text style={styles.textError}>{errorPassword}</Text> :<></>}


        <TouchableOpacity style={styles.btnPrimary} onPress={() => update()}>
        <Text style={styles.textBtn}>Atualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondary} onPress={() => exitApp()}>
        <Text style={styles.textBtnSecondary}>Sair</Text>
        </TouchableOpacity>

        </View>


        </ScrollView>

        </View>

        </View>

    )

}

export default Profile