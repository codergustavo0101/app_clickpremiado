import React,{useState} from 'react'
import {View,Text,ScrollView} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'


import HeaderLanding from '../../components/HeaderLanding'
import UserRegister from '../../images/icons/UserRegister'
import InputRow from '../../components/InputRow'

import Button2 from '../../components/Button2'
import InputMask from '../../components/InputMask'

import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'


import styles from './style'

const Register = () =>{

    const navigation = useNavigation()

    const [name,setName] = useState()
    const [cpf,setCpf] = useState()
    const [phone,setPhone] = useState()

    const [mail,setMail] = useState()
    const [password,setPassword] = useState()

    const [confirmPassword,setConfirmPassword] = useState()


    /* ERROR MESSAGES */

    const [nameError,setNameError] = useState()
    const [cpfError,setCpfError] = useState()
    const [phoneError,setPhoneError] = useState()

    const [mailError,setMailError] = useState()
    const [passwordError,setPasswordError] = useState()
    const [confirmPasswordError,setPassConfirmError] = useState()


    async function register(){

        if(name == undefined){
            setNameError('Informe um nome')
        }

        if(cpf == undefined){
            setCpfError('Informe um CPF')
        }

        if(phone == undefined){
            setPhoneError('Informe um telefone')
        }

        if(mail == undefined){
            setMailError('Informe um e-mail')
        }

        if(password == undefined){

            setPasswordError('Informe uma senha')

        }

        if(password != confirmPassword){

            setPassConfirmError('Senhas devem ser iguais')

        }

        if(name == undefined || cpf == undefined || phone == undefined || mail == undefined || password == undefined || password != confirmPassword){

            return false
        }
        


        const response = await api.post('user',{

            name:name,
            cpf:cpf,
            phone:phone,
            mail:mail,
            password_hash:password,
            valueInAccount:'0.00'
        })

        if(response.status == 200){
            AsyncStorage.setItem('@mail',mail)
            navigation.navigate('Dashboard')
        }else{

            alert('Algo deu errado :(')

        }


        
    }

    return(

        <View style={styles.container}>
        <ScrollView>
        <HeaderLanding page="Landing"/>

        <View style={styles.form}>

        <UserRegister/>
        <Text style={styles.textPrimary}>Bem vindo!</Text>
        
        <View>
        <InputRow placeholder="Nome completo:" onChangeText={setName} />
        {nameError != undefined ? <Text style={styles.textError}>{nameError}</Text> : <></>}
        </View>

        <View>
        <InputMask placeholder="CPF:" type={'cpf'} onChangeText={text => setCpf(text)} value={cpf}/>
        {cpfError != undefined ? <Text style={styles.textError}>{cpfError}</Text> : <></>}
        </View>

        <View>
        <InputMask placeholder="Telefone:"  type={'cel-phone'} onChangeText={text => setPhone(text)} value={phone} />
        {phoneError != undefined ? <Text style={styles.textError}>{phoneError}</Text> : <></>}

        </View>

        <View>
        <InputRow placeholder="E-mail:" onChangeText={setMail}/>
        {mailError != undefined ? <Text style={styles.textError}>{mailError}</Text> : <></>}

        </View>

        <View>
        <InputRow placeholder="Senha:" secure={true} onChangeText={setPassword}/>
        {passwordError != undefined ? <Text style={styles.textError}>{passwordError}</Text> : <></>}

        </View>

        <View>
        <InputRow placeholder="Confirmar senha:" secure={true} onChangeText={setConfirmPassword}/>
        {confirmPasswordError != undefined ? <Text style={styles.textError}>{confirmPasswordError}</Text> : <></>}

        </View>

        <Button2 text="Cadastrar" onPress={() => register()}/>

        </View>
        </ScrollView>
        </View>
        
    )

}

export default Register