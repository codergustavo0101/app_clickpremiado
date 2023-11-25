import React from 'react'
import {View,TextInput } from 'react-native'

import UserLoginIcon from '../../images/icons/UserLoginIcon'
import PasswordLoginIcon from '../../images/icons/PasswordLoginIcon'

import UserInput from '../../images/icons/UserInput'
import MailInput from '../../images/icons/MailInput'
import InputPixIcon from '../../images/icons/InputPixIcon'

import InputPassword from '../../images/icons/InputPassword'

import styles from './style'

const InputProfile = ({icon,type,placeholder,password,onChangeText,onChange,value}) =>{

    return(
    
        icon == 'userIcon' 
        ?

        <View>
        <UserInput style={styles.userIcon}/>
        <TextInput style={styles.input} keyboardType={type} value={value} onChange={onChange} secureTextEntry={password} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor="white" />
        </View>
        
        :

        icon == 'mailProfile'

        ?

        <View>
        <MailInput style={styles.userIcon}/>
        <TextInput style={styles.input} editable={false} keyboardType={type} value={value} onChange={onChange} secureTextEntry={password} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor="white" />
        </View>
        
        :

        icon == 'pix'
        
        ?
        <View>
        <InputPixIcon style={styles.userIcon}/>
        <TextInput style={styles.input} keyboardType={type} onChange={onChange} value={value} secureTextEntry={password} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor="#353434" />
        </View>
        :

        icon == 'password' 

        ?
        <View>
        <InputPassword style={styles.userIcon}/>
        <TextInput style={styles.input} keyboardType={type} onChange={onChange} secureTextEntry={password} placeholder={placeholder} onChangeText={onChangeText}placeholderTextColor="#353434" />
        </View>
        :

        <View>
        <UserLoginIcon style={styles.userIcon}/>
        <TextInput style={styles.input} keyboardType={type} onChange={onChange} secureTextEntry={password} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor="white" />
        </View>

    )

}

export default InputProfile