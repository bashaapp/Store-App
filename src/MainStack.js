import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screens/Home';
import ProfileScreen from './screens/Profile';
import NotificationScreen from './screens/Notification';
import ShopScreen from './screens/Shop';
import ProductDetails from './Store/ProductDetails';
import MenStore from './Store/Men';
import WomenStore from './Store/Women';
import KidsStore from './Store/Kids';
  


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ShopStack = createStackNavigator();


const MainStack =()=>{
    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#694fad"
        inactiveColor="gray"
        barStyle={{ backgroundColor: '#f0edf6' }}
         
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopStackScreen}
            options={{
              tabBarLabel: 'Shop',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="shopping" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
              tabBarLabel: 'Notification',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
           <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

const HomeStackScreen =({navigation})=>{
    return(
       
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeScreen}
          options={{
            title:'HOME', headerTitleAlign:'center',
            
           headerStyle:{
            backgroundColor:'#fff'
          },
            headerTitleStyle:{
              color:'#694fad',
              fontWeight:'bold'
            },
            
           }}
           
           />
          <HomeStack.Screen name="Men" component={MenStore}
           options={{
            title:'Men Store', headerTitleAlign:'center',
            headerTintColor:'#000',
          headerStyle:{
            backgroundColor:'#fff'
          },
            headerTitleStyle:{
              color:'#694fad'
            },
            
           }}
           
           />
            <HomeStack.Screen name="Women" component={WomenStore}
           options={{
            title:'Women Store', headerTitleAlign:'center',
            headerTintColor:'#000',
          headerStyle:{
            backgroundColor:'#fff'
          },
            headerTitleStyle:{
              color:'#694fad'
            },
            
           }}
           
           />

<HomeStack.Screen name="Kids" component={KidsStore}
           options={{
            title:'Kids Store', headerTitleAlign:'center',
            headerTintColor:'#000',
          headerStyle:{
            backgroundColor:'#fff'
          },
            headerTitleStyle:{
              color:'#694fad'
            },
            
           }}
           
           />
           
        </HomeStack.Navigator>
     
    )
}


const ShopStackScreen =({navigation})=>{
  return(
     
      <ShopStack.Navigator>

         <ShopStack.Screen name="Shop" component={ShopScreen}  options={{
            title:'SHOP', headerTitleAlign:'center',
            headerTintColor:'#000',
          headerStyle:{
            backgroundColor:'#fff'
          },
            headerTitleStyle:{
              color:'#694fad',
              fontWeight:'bold'
            },
            
           }}
           
           />
         <ShopStack.Screen name="Product" component={ProductDetails}
          options={{
            title:'Product', headerTitleAlign:'center',
            headerTintColor:'#000',
          headerStyle:{
            backgroundColor:'#fff'
          },
            headerTitleStyle:{
              color:'#694fad'
            },
            
           }}
           
           />
         
  
      </ShopStack.Navigator>
   
  )
}




export default MainStack;
