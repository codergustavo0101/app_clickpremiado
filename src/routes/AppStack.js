import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Dashboard from '../pages/Dashboard'


import Landing from '../pages/Landing'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'

import Profile from '../pages/Profile'
import SendCode from '../pages/SendCode'

const AppStack = () =>{

    return(

        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Landing" component={Landing}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>

        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="SendCode" component={SendCode}/>


        </Stack.Navigator>

    )

}

export default AppStack