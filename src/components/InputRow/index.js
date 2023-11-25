import React from 'react'
import {TextInput } from 'react-native'

import styles from './style'

const InputRow = ({placeholder,secure,onChangeText}) =>{

    return(

        <TextInput style={styles.input} secureTextEntry={secure} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor="black"/>
        

    )

}

export default InputRow