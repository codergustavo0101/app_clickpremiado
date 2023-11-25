import React,{useState} from 'react'
import {View,Text} from 'react-native'

import Astronaut from '../../images/icons/Astronaut'
import HeaderLanding from '../../components/HeaderLanding'
import InputRow from '../../components/InputRow'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Button2 from '../../components/Button2'

import { useNavigation } from '@react-navigation/native'

import styles from './style'
import { ScrollView } from 'react-native'

const ForgotPassword = () =>{

    const navigation = useNavigation()

    const [mail,setMail] = useState()

    const [mailError,setMailError] = useState()

    async function redirectToForgotPasswordPage(){

        if(mail == undefined){

            setMailError('Informe um email')
        }else{
            AsyncStorage.setItem('@email_forgot',mail)
            navigation.navigate('SendCode')

        }


    }
    

    return(

        <View style={styles.container}>
        <HeaderLanding page="Landing"/>

        <ScrollView>
        <View style={styles.containerForm}>
        <Astronaut/>
        <Text style={styles.textPrimary}>Esqueceu sua senha?</Text>
        <Text style={styles.textSecondary}>Não se preocupe deixe tudo {`\n`} conosco!</Text>
        
        <View>
        <InputRow placeholder="E-mail" onChangeText={setMail}/>
        {mailError != undefined ? <Text style={styles.textError}>{mailError}</Text> : <></> }
        </View>

        <Button2 text="Redefinir senha" onPress={redirectToForgotPasswordPage}/>
        </View>
        </ScrollView>
        </View>

    )

}

export default ForgotPassword