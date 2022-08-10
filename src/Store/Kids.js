import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';



const KidsStore =()=>{
    return(
        <View style={styles.container}>
            <ScrollView>
           <View style={styles.firstView}>
            <View>
           <Image style={styles.image} 
           source={require('../../assets/images/image19.jpg')}/>
            <Text style={styles.textImage}>Classic Style</Text>
           <Text style={styles.subText}>$Price500</Text>
           </View>

           <View>
           <Image style={styles.image} 
           source={require('../../assets/images/image20.jpg')}/>
           <Text style={styles.textImage}>Classic Style</Text>
           <Text style={styles.subText}>$Price500</Text>
           </View>
           </View>
          
           <View >
               <Image style={styles.backImage}
               source={require('../../assets/images/image21.png')}/>
                <Text style={styles.textBcImg}>Choose</Text>
                <Text style={styles.subImgText}>Your Style</Text>
           </View>

           <View style={styles.firstView}>
            <View>
           <Image style={styles.image} 
           source={require('../../assets/images/image22.jpg')}/>
            <Text style={styles.textImage}>Classic Style</Text>
           <Text style={styles.subText}>$Price500</Text>
           </View>

           <View>
           <Image style={styles.image} 
           source={require('../../assets/images/image23.jpg')}/>
           <Text style={styles.textImage}>Classic Style</Text>
           <Text style={styles.subText}>$Price500</Text>
           </View>
           </View>
           <View style={styles.firstView}>
            <View>
           <Image style={styles.image} 
           source={require('../../assets/images/image24.jpg')}/>
            <Text style={styles.textImage}>Classic Style</Text>
           <Text style={styles.subText}>$Price500</Text>
           </View>

           <View>
           <Image style={styles.image} 
           source={require('../../assets/images/image25.jpg')}/>
           <Text style={styles.textImage}>Classic Style</Text>
           <Text style={styles.subText}>$Price500</Text>
           </View>
           </View>
           </ScrollView>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        padding: 0,
        margin: 0,
        flex: 1,
        backgroundColor:'#fff'
      
    },
    firstView:{
    flexDirection:'row',
    marginTop:5,
    paddingLeft:5,
    paddingRight:5,
    justifyContent:'space-evenly'
    
    },
    image:{
        width: 130,
        height: 150,
        borderRadius: 15,
        borderColor:'#694fad',
        borderWidth:1,
        marginTop:5
      },
      textImage:{
        fontSize:15, 
        fontWeight:'bold',
        color:'#694fad', 
        alignSelf:'center',  
      },
      subText:{
        fontSize:15,
        fontWeight:'500',
        color:'#FF5733',
        alignSelf:'center',
    },

   
    backImage:{
             width:'93%',
             height: 120,
             borderRadius: 15,
             marginTop:10,
             alignSelf:'center',
             opacity:0.7,
    },
    textBcImg:{
        fontSize:30, 
        fontWeight:'bold',
        color:'#FF5733',
        position:'absolute', 
        paddingLeft:10,
        paddingTop:10
      },
      subImgText:{
        fontSize:20,
        fontWeight:'700',
        color:'black',
        paddingTop:40,
        position:'absolute', 
        paddingLeft:10,
       
       

      
      }
})

export default KidsStore;