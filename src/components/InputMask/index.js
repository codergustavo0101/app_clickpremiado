import { TextInputMask } from 'react-native-masked-text'

import styles from './style'

const InputMask = ({type,placeholder,onChangeText,value}) =>{


    return(
        <>
        
   
        <TextInputMask type={type} value={value} style={styles.input} onChangeText={onChangeText}  placeholder={placeholder} placeholderTextColor="black" />
        </>
    )

}

export default InputMask