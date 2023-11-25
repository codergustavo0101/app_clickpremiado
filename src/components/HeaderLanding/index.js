import React from 'react'
import {View,TouchableOpacity} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import BackIcon from '../../images/icons/BackIcon'

import styles from './style'

const HeaderLanding = ({page}) =>{

    const navigation = useNavigation()

    const redirectToPage = () =>{

        navigation.navigate(page)

    }

    return(

        <View style={styles.header}>
        <TouchableOpacity onPress={redirectToPage}>
        <BackIcon/>
        </TouchableOpacity>
        </View>

    )

}

export default HeaderLanding