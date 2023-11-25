import React from 'react'
import {View,TextInput } from 'react-native'

import UserLoginIcon from '../../images/icons/UserLoginIcon'
import PasswordLoginIcon from '../../images/icons/PasswordLoginIcon'
import styles from './style'

const Input = ({type,placeholder,password,onChangeText,onChange}) =>{

    return(
        
        <>

        {type == 'email-address' 
        
        ?
    
        <View>
        <UserLoginIcon style={styles.userIcon}/>
        <TextInput style={styles.input} keyboardType={type} onChange={onChange} secureTextEntry={password} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor="white" />
        </View>

        :

        <View>
        <PasswordLoginIcon style={styles.userIcon}/>
        <TextInput style={styles.input} keyboardType={type}  onChange={onChange} secureTextEntry={password} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor="white" />
        </View>

        }
        </>
    )

}

export default Input