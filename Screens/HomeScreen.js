import React, { Component } from 'react'

import {  View,Image,Text,TouchableOpacity,StyleSheet } from 'react-native';


import HomeBoxScreen from "./HomeBoxScreen";

import  Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper'



function HomeScreen({navigation}) {

  

    return (
      <View style={{ flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#E0F4EA', }}>
      <View style={{height:65,width:'100%',backgroundColor:'#2196f3'}}>
 <View style={{height:65,flexDirection:'row',justifyContent: 'space-between',
 padding:11,alignItems:'center'}}>
 
     
 <Entypo
 onPress={() => navigation.toggleDrawer()}
 
 name='menu'  style={{fontSize:22,
     color:'white',textAlign:'left'}} />
 
     
             <Text style={{color:'white',marginRight:49,textAlign:'center',fontSize:18,}}>
 
          
                 Conrads Fine Dry Cleaners
             
              </Text>
              </View>
       
       
         </View>
 
 
 
 
 
 
      <View style={{width:'100%',height:173,padding:0,}}>
     
      
 
      <Swiper  showsButtons={true} autoplay={true}  style={{height:333,}}>
          <Image
               style={{  height:173,width:'100%' }}
 
       resizeMode="cover"
 
       source={require('../assests/banneriamge.jpg')} 
     />
 
 
 
 
 
 
 
          <Image
               style={{  height:173,width:'100%' }}
 
       resizeMode="cover"
 
       source={require('../assests/banneriamge.jpg')} 
     />
       <Image
               style={{  height:173,width:'100%' }}
 
       resizeMode="cover"
 
       source={require('../assests/banneriamge.jpg')} 
     />
       </Swiper>
 
 
 
 
 
 
 
    </View>
     
 
       
       <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',}}>
    
 <View style={{height:12}}></View>
 

 
 <HomeBoxScreen />


 
 
 
 
 
       </View>
       </View>
    )

}



export default HomeScreen
