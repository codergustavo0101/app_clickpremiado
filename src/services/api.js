
import AsyncStorage from '@react-native-async-storage/async-storage'

import {create} from 'apisauce'

const api = create({

    baseURL:'https://api-clique-premiado.herokuapp.com/'
})

/*

 Send Token to API
 
*/


api.addAsyncRequestTransform(response => async() =>{
    const token = await  AsyncStorage.getItem('@TOKEN')
    if(token){

        response.headers['Authorization']  = `Bearer ${token}`

    }

})




export default api