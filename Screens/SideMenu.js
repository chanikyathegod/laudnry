import React, { Component } from 'react'
import { Text, View ,Image,TouchableOpacity} from 'react-native'
import  Entypo from 'react-native-vector-icons/Entypo';
 

  import {
    DrawerContentScrollView,
    DrawerItemList,DrawerItem
  } from '@react-navigation/drawer';

  




function SideMenu(props) {
    
        return (
           


<View style={{flex:1}}>
                <DrawerContentScrollView style={{marginTop:13}}>

<View>

<Image source={require('../assests/logo.png')} 
style={{marginLeft:22,}}
/>



</View>





      <DrawerItemList {...props} />
   


    




                </DrawerContentScrollView>
            </View>
        )

}


export default SideMenu;