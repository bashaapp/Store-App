import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Notifications} from '../../model/Notifications';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const NotificationScreen =()=>{

const [listData, setListData] = useState(
  Notifications.map((notItem, index)=>({
key:`${index}`,
title:notItem.title,
details:notItem.details
}))
)

const closeRow = (rowMap,rowKey)=>{
  if(rowMap[rowKey]){
    rowMap[rowKey].closeRow();
  }
}

const deleteRow = (rowMap, rowKey)=>{
  const newData = [...listData]
  const prevIndex = listData.findIndex(item=>item.key===rowKey)
  newData.splice(prevIndex, 1)
  setListData(newData)
}

const renderItem = (data)=>{
  return(
    <View style={styles.rowFront}>
      <TouchableOpacity style={styles.rowFrontVisible}>
        <View>
       <Text style={styles.title} numberOfLines={1}>{data.item.title}</Text>
       <Text style={styles.details} numberOfLines={1}>{data.item.details}</Text>

        </View>

      </TouchableOpacity>
    </View>
  )
}

const renderHiddenItem = (data, rowMap)=>{
  return(
    <View style={styles.rowBack}>
    <Text>Left</Text>
    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]}
    onPress={()=> closeRow(rowMap, data.item.key)}
    >
     <MaterialCommunityIcons name="close-circle-outline" color='#fff'size={25} style={styles.trash}/>
    </TouchableOpacity>
    
    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}
    onPress={()=>deleteRow(rowMap, data.item.key)}
    >
     <MaterialCommunityIcons name="trash-can-outline" size={25} color="#fff" style={styles.trash}/>
    </TouchableOpacity>
</View>
  )
}
  return(
    <View style={styles.container}>
    <SwipeListView
    data={listData}
    renderItem={renderItem}
    renderHiddenItem={renderHiddenItem}
    leftOpenValue={75}
    rightOpenValue={-150}
    disableRightSwipe
    
    />


      </View>
  )
}


const styles =StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
})


export default NotificationScreen;