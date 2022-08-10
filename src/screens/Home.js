import React from 'react';
import {View,  StyleSheet, Image, Text,
   TouchableOpacity} from 'react-native';
   import * as Animatable from 'react-native-animatable';



const HomeScreen =({navigation})=>{
  return(
    <Animatable.View animation="fadeInDown"  style={styles.mainContainer}>
        
        <View style={styles.firstView}>
         <TouchableOpacity onPress={()=>navigation.navigate('Men')} style={{width:'100%', height:'100%'}} >
         <Image style={styles.image} 
           source={require('../../assets/images/man.jpg')}/>
           <Text style={styles.textImage}>MEN</Text>
           <Text style={styles.subText}>Shop Now</Text>
           </TouchableOpacity>
         </View>

         <View style={styles.firstView}>
         <TouchableOpacity onPress={()=>navigation.navigate('Women')} style={{width:'100%', height:'100%'}} >
         <Image style={styles.image} 
           source={require('../../assets/images/woman.jpg')}/>
           <Text style={styles.textImage}>WOMEN</Text>
           <Text style={styles.subText}>Shop Now</Text>
           </TouchableOpacity>
         </View>

          <View style={styles.firstView}>
          
         <TouchableOpacity style={{width:'100%', height:'100%'}} onPress={()=>navigation.navigate('Kids')}>
         <Image style={styles.image} 
           source={require('../../assets/images/kids.jpg')}/>
           <Text style={styles.textImage}>KIDS</Text>
           <Text style={styles.subText}>Shop Now</Text>
           </TouchableOpacity>
           
         </View>
         
       
      </Animatable.View>
  )
}


const styles =StyleSheet.create({
  
  mainContainer:{
    flex:1,
     backgroundColor: 'black', 
   
  },
  firstView:{
    flex:1,
},
image:{
  width:'100%', 
  height:'100%',  
  backgroundColor: 'black', 
  opacity: 0.7 ,
  borderColor:'white',
  borderWidth:10,
 
},
textImage:{
  fontSize:30, 
  fontWeight:'bold',
  color:'#fff', 
  alignSelf:'center', 
  position:'absolute', 
  paddingTop:50,
},
subText:{
  fontSize:15,
  fontWeight:'500',
  color:'white',
  alignSelf:'center',
  position:'absolute',
  paddingTop:90,

}
})


export default HomeScreen;