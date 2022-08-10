
import React from 'react';
import MainStack from './src/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import SplashScreen from '././src/screens/SplashScree';


const Stack = createStackNavigator();



const App=()=> {
  return (

    <NavigationContainer>
     
     <MainStack/>
    </NavigationContainer>
 
  );
}





export default App;
