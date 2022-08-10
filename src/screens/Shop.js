import React from 'react';
import {View, Text, StyleSheet, Image,FlatList} from 'react-native';
import Swiper from 'react-native-swiper/src';
import {data} from '../../model/Data';
import {DATA} from '../../model/Data';

import Card from '../Store/Card';


const ShopScreen =({navigation})=>{

  const renderItem = ({item})=>{
    return(
      <Card 
      itemData={item}
      onPress={()=> navigation.navigate('Product',{itemData:item})}
      />
    )
  }
  return(
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper autoplay activeDotColor='#694fad'>
          <View style={styles.slide}>
            <Image style={styles.sliderImage}
            source={require('../../assets/images/slide1.jpg')} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.sliderImage}
            source={require('../../assets/images/slide2.jpg')} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.sliderImage}
            source={require('../../assets/images/slide3.jpg')} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.sliderImage}
            source={require('../../assets/images/slide4.jpg')} />
          </View>
        </Swiper>
      </View>
      
      <View style={styles.textView}>
        <Text style={styles.text}>New Arrive</Text>
      </View>

      <View>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
      </View>

    
      <View style={styles.textView}>
        <Text style={styles.text}>New Fashion</Text>
      </View>
      <View>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
      </View>

      
      </View>
      
     
      
      
  )
}


const styles =StyleSheet.create({
  container:{
    padding: 0,
    margin: 0,
    flex: 1,
    backgroundColor:'#fff'
  },
  sliderContainer: {
    height: 130,
    width: '95%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  textView:{
    marginTop:10,
  },
  text:{
    fontSize:13,
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
  
 
 
})


export default ShopScreen;