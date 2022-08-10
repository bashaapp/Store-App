import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';


const SplashScreen =({navigation})=>{
    return(
        <View style={styles.container}>

            <Animatable.View
            animation="zoomIn" style={styles.header}>
                <Image style={styles.logoImage}
                 source={require('../../assets/images/logo.jpg')}
                />
                <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.title}>BASHA STORE</Animatable.Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                    <View style={{marginBottom:30}}>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Main')}>
                    <Text style={styles.btnText}>Get Started</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{top:80}}>
                    <Text style={styles.botmText}>Powered by Bashamlan.com</Text>
                    </View>
                </Animatable.View>
                
           
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:2,
      backgroundColor:'#fff',
      
    },
    header:{
      flex:1,    
      justifyContent:'center',
      alignItems:'center' ,
      marginTop:50   
      
    },
     footer:{
       flex:1,
       justifyContent:'center',
      alignItems:"center",
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      backgroundColor:'#551a8b'
    },
    logoImage:{
        width:150,
        height:150,
        alignSelf:'center'
    },
    title:{
        fontSize:30,
        marginTop:20,
        fontWeight:'bold',
        color:'#551A8B',
        alignSelf:'center'
    },
    button:{
        width:'100%',
        height:'100%',
       // backgroundColor:'#551A8B',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        paddingLeft:30,
        paddingRight:30,
        padding:5,
        borderWidth:2,
        borderColor:'#fff'
    },
    btnText:{
        fontSize:20,
        fontWeight:'500',
        color:'#fff'
    },
    botmText:{
      
        color:'#fff',
        fontSize:12,
       // marginTop:110,
        
     

    }

})

export default SplashScreen;