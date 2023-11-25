import React from 'react'
import {Text,TouchableOpacity } from 'react-native'


import styles from './style'

const Button2 = ({text,onPress}) =>{

    return(

        <TouchableOpacity style={styles.button} onPress={onPress}>

        <Text style={styles.textPrimary}>{text}</Text>

        </TouchableOpacity>

    )

}

export default Button2