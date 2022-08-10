import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';


const Card = ({itemData, onPress})=>{

    return(
      
        <TouchableOpacity onPress={onPress}>
           <View style={styles.itemContainer}>
           
           <Image style={styles.itemImage}
          source={itemData.image}
          />
          <Text style={styles.texTshirt}>{itemData.title}</Text>
    <Text style={styles.subTextshirt}>{itemData.price}</Text>
      
      </View>
</TouchableOpacity>
 )
}

const styles = StyleSheet.create({
  
    itemContainer:{
        marginTop:5,
        height: 135,
       },
  
       itemImage:{
         marginLeft:4,
         marginRight:4,
         width:100,
         height:100,
         borderWidth:2,
         borderColor:'#694fad',
         borderRadius:20,
         alignSelf:'center'
       },
       texTshirt:{
         fontSize:15,
         fontWeight:'bold',
         color:'#000000',
         alignSelf:'center'
       },
       subTextshirt:{
         fontSize:12,
         color:'#694fad',
         alignSelf:'center',
         fontWeight:'700'
       },
})


export default Card;