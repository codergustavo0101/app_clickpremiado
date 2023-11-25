import React,{useEffect,useState} from 'react'
import {View,Text,ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import HeaderLanding from '../../components/HeaderLanding'
import ResetPassword from '../../images/icons/ResetPassword'

import InputRow from '../../components/InputRow'

import styles from './style'


const SendCode = () =>{

    const [mail,setMail] = useState()
    
    useEffect(() =>{

        async function getMail(){
        const mail = await AsyncStorage.getItem('@email_forgot')
        setMail(mail)
        }
        getMail()

        const number = Math.floor(Math.random() * 10 + 1)
        
        console.log(number)


    },[])
    
    return(

       
        <ScrollView style={{backgroundColor:'white'}}>

        <HeaderLanding page={'ForgotPassword'}/>

        <View style={styles.content}>
        <ResetPassword/>
        <Text style={styles.text}>E-mail enviado!</Text>
        <Text style={styles.textSecondary}>As instruções foram enviadas para o e-mail {`\n`} abaixo:</Text>
        <Text style={styles.textMail}>{mail}</Text>

        <View>
        <InputRow placeholder={'Informe o código'}/>
        
        <View style={styles.row}>
        <TouchableOpacity>
        <Text>Não recebeu?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text>Reenviar</Text>
        </TouchableOpacity>
        </View>

        </View>

        <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Confirmar código</Text>
        </TouchableOpacity>

        </View>

        </ScrollView>
       

    )

}

export default SendCode