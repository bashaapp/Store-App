import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';


const ProductDetails =({route})=>{
    const itemData = route.params.itemData;
    return(
        <Animatable.View
        animation="zoomInDown" style={styles.container}>
            <View style={styles.header}>
              <Image
              source={itemData.image}
              style={styles.sliderImage}
             />
          <View style={styles.textView}>
            <Text style={styles.text}>Item Details:</Text>
            <Text style={styles.subTextshirt}>{itemData.title}</Text>
            <Text style={styles.subTextshirt}>{itemData.quality}</Text>
            <Text style={styles.subTextshirt}>{itemData.description}</Text>
            <Text style={styles.subTextshirt}>{itemData.price}</Text>
            </View>
          </View> 
          <View style={styles.footer}>
                    <View style={{marginBottom:30}}>
                    <TouchableOpacity style={styles.button} onPress={()=>{}}>
                    <Text style={styles.btnText}>Buy Now</Text>
                    </TouchableOpacity>
                    </View>
                    
                </View>
        </Animatable.View>
    )
}


const styles =StyleSheet.create({
    container:{
       flex: 3,
        backgroundColor:'#fff',
      },
      header:{
        flex:1,    
        justifyContent:'center',
        alignItems:'center' ,
       marginTop:5  
      },
      footer:{
      marginTop:5,
      
     },
      sliderImage: {
        height: '50%',
        width: '65%',
        alignSelf: 'center',
        borderRadius: 8,
      },
      textView:{
        flex:1,
        marginBottom:10,
      },
      text:{
        fontSize:15,
       justifyContent:'center',
       textAlign:'center',
       extTransform:"capitalize",
       padding:2,
       color:"#fff",
       backgroundColor:'#694fad',
       maxWidth:90,
       borderRadius:15,
       marginLeft:5
      },
      subTextshirt:{
        fontSize:13,
        color:'#000',
        fontWeight:'700',
        marginLeft:10,
        marginTop:5
        
      },
      button:{
        width:'70%',
        height:'100%',
        backgroundColor:'#694fad',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        alignSelf:'center',
        paddingLeft:10,
        paddingRight:10,
        padding:5
    },
    btnText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
   
   
})

export default ProductDetails;