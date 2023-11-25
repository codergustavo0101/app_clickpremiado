import { TextInputMask } from 'react-native-masked-text'
import {View } from 'react-native'

import CpfIcon from '../../images/icons/CpfIcon'
import InputPhoneIcon from '../../images/icons/InputPhoneIcon'
import styles from './style'

const InputMaskProfile = ({icon,type,placeholder,onChangeText,value}) =>{


    return(
        <>

        {icon == 'cpf' 
        ?

        <View>
        <CpfIcon style={styles.userIcon}/>
        <TextInputMask type={type} value={value} style={styles.input} onChangeText={onChangeText}  placeholder={placeholder} placeholderTextColor="black" />
        </View>
        :

        icon == 'phone' 
        ?

        
        <View>
        <InputPhoneIcon style={styles.userIcon}/>
        <TextInputMask type={type} value={value} style={styles.input} onChangeText={onChangeText}  placeholder={placeholder} placeholderTextColor="black" />
        </View>
        :

        <View>
        <CpfIcon style={styles.userIcon}/>
        <TextInputMask type={type} value={value} style={styles.input} onChangeText={onChangeText}  placeholder={placeholder} placeholderTextColor="black" />
        </View>

        }
        
    
        </>
    )

}

export default InputMaskProfile