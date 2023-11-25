import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

/* COMPONENTS */

import LoginIcon from '../../images/icons/LoginIcon'
import UserLoginIcon from '../../images/icons/UserLoginIcon'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'

import Button from '../../components/Button'

import api from '../../services/api'

/* STYLES */
import styles from './style'

const Landing = () =>{
    
    const navigation = useNavigation()

    const redirectToDashboardPage = () =>{
    navigation.navigate('Dashboard')
    }

    const redirectToRegisterPage = () =>{
    navigation.navigate('Register')
    }

    const redirectToForgotPassword = () =>{
    navigation.navigate('ForgotPassword')
    }

    const [mail,setMail] = useState()
    const [password,setPassword] = useState()
    
    const [message,setMessage] = useState()

    const [mailError,setMailError] = useState()
    const [passwordError,setPasswordError] = useState()


    async function login(){

        if(mail == undefined){
        setMailError('Informe um email')
        }

        if(password  == undefined){
        setPasswordError('Informe uma senha')
        }

        if(mail == undefined || password == undefined){

            return false
        }

       const response = await api.post('sessions',{

        mail:mail,
        password:password
        })


        if(response.status == 200){
            setMessage('Logado com sucesso!')
            AsyncStorage.setItem('@mail',mail)
            redirectToDashboardPage()
        }else{
            setMessage('Email ou senha inválidos!')

        }
  
    }

    useEffect(() =>{

        if(message != undefined){

            setTimeout(() =>{

                setMessage()

            },3000)

        }


        if(mail != undefined){

            setMailError()

        }

        if(password != undefined){

            setPasswordError()

        }

    })

    return(

        
        <View style={styles.container}>

        <LoginIcon/>
        <Text style={styles.textPrimary}>Dados de Acesso</Text>

        {message == 'Email ou senha inválidos!' 
        
        ?
    
        <Text style={styles.messageError}>Email ou senha inválidos :(</Text>

        :
        message == 'Logado com sucesso!' 
        ?

        <Text style={styles.messageSucess}>Logado Sucesso... :)</Text>

        :
        <></>

        }

        <View style={styles.containerInputs}>

        <View>
        <Input type={"email-address"} placeholder="E-mail" onChangeText={setMail}/>
        {mailError != undefined ? <Text style={styles.messageErrorInput}>{mailError}</Text> : <></>}
        </View>

        <View>
        <Input type={"default"} placeholder="Senha" password={true}  onChangeText={setPassword}/>
        {passwordError != undefined ? <Text style={styles.messageErrorInput}>{passwordError}</Text> : <></>}

        </View>

        <View style={styles.row}>
        <TouchableOpacity onPress={() => redirectToForgotPassword()}>
        <Text style={styles.textForgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        </View>


        </View>

        
        <Button text="Entrar" background="#2753EE" onPress={() => login()}/>

        <TouchableOpacity style={styles.btn} onPress={() =>  redirectToRegisterPage()}>
        <Text style={styles.textBtn}>Cadastro</Text>
        </TouchableOpacity>

        <Text style={styles.textVersion}>Versão 1.0.0</Text>
        </View>

    )

}

export default Landing