import React from 'react'
import {Text,TouchableOpacity } from 'react-native'


import styles from './style'

const Button = ({text,onPress}) =>{

    return(

        <TouchableOpacity style={styles.button} onPress={onPress}>

        <Text style={styles.textPrimary}>{text}</Text>

        </TouchableOpacity>

    )

}

export default Button