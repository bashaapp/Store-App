import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Avatar, Title, Caption,TouchableRipple, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';


const ProfileScreen =({navigation})=>{
  return(
    <Animatable.View animation="fadeInUpBig"  style={styles.container}>
      <View style={styles.infoSection}>
        <View style={{flexDirection:'row', marginTop:15}}>
          <Avatar.Image
          source={require('../../assets/images/logo.jpg')} 
          size={80}
          />
          <View style={{marginLeft:15}}>
            <Title style={styles.title}>Bashamlan</Title>
             <Caption style={styles.caption}>@basha</Caption>
          </View>
        </View>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.row}>
          <Icon name='map-marker-radius' color="#777777" size={20}/>
          <Text style={{color:'#777777', marginLeft:10}}>Kuala-Lumpur</Text>
        </View>
        <View style={styles.row}>
          <Icon name='phone' color="#777777" size={20}/>
          <Text style={{color:'#777777', marginLeft:10}}>+60104282322</Text>
        </View>
        <View style={styles.row}>
          <Icon name='email' color="#777777" size={20}/>
          <Text style={{color:'#777777', marginLeft:10}}>Basha20@gmail.com</Text>
        </View>
        </View>

        <View style={styles.menu}>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='heart-outline' color="#694fad" size={25}/>
              <Text style={styles.menuText}>Your Favorites</Text>
              </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='card' color="#694fad" size={25}/>
              <Text style={styles.menuText}>Payment</Text>
              </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='share-outline' color="#694fad" size={25}/>
              <Text style={styles.menuText}>Tell Your Friends</Text>
              </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='account-check-outline' color="#694fad" size={25}/>
              <Text style={styles.menuText}>Support</Text>
              </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='settings-outline' color="#694fad" size={25}/>
              <Text style={styles.menuText}>Settings</Text>
              </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='account-outline' color="#694fad" size={25}/>
              <Text style={styles.menuText}>Account</Text>
              </View>
          </TouchableRipple>

        </View>
      </Animatable.View>
  )
}


const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
   
  },
  infoSection:{
  paddingHorizontal: 10,
    marginBottom: 25,
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:15,
    marginBottom:5
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    
   
  },
  menu:{
    marginBottom:30,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 2,
    borderTopColor: '#dddddd',
    borderTopWidth: 2,
  
  },
  menuItem:{
    flexDirection:'row',
    paddingVertical:8,
    paddingHorizontal:10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 2,
  },
  menuText:{
    color:'#777777',
    marginLeft:20,
    fontWeight:'600',
    fontSize:16,
    lineHeight:26
  }
})


export default ProfileScreen;