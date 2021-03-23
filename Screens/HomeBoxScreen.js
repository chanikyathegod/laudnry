import React from 'react'
import { View, Text,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-paper';

function HomeBoxScreen ({  }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            
           
            <View style={styles.boxyellow}>
            
            <View style={styles.inner}>
            <Image source={require('../assests/schedule.png')} style={{height:90,width:88,}} />
            <Text style={{paddingTop:20,fontWeight:'bold',fontSize:17,}} > pick up </Text>
            </View>
            </View>
          

            <View style={styles.boxyellow}>
            
            <View style={styles.inner}>
            <Image source={require('../assests/washing.png')} style={{height:90,width:88,}} />
            <Text style={{paddingTop:20,fontWeight:'bold',fontSize:17,}} >Wash and dry </Text>
            </View>
            </View>

          
            <View style={styles.boxyellow}>
            
            <View style={styles.inner}>
            <Image source={require('../assests/iron-table.png')} style={{height:90,width:88,}} />
            <Text style={{paddingTop:20,fontWeight:'bold',fontSize:17,}} >
Fold and iron</Text>
            </View>
            </View>
            <View style={styles.boxyellow}>
            
            <View style={styles.inner}>
            <Image source={require('../assests/shipped.png')} style={{height:90,width:88,}} />
            <Text style={{paddingTop:20,fontWeight:'bold',fontSize:17,}} >Free delivery </Text>
            </View>
           
            </View>
        
            <View style={{marginLeft:'27%',marginTop:13,}}>
            <Button mode="contained"

color="#1DA1F2"
contentStyle={{ height: 44 }}
labelStyle={{ color: "white", fontSize: 16}}
  style={{borderRadius:32,padding:3}}
  
  onPress={() => navigation.navigate('Login')}>
   SCHEDULE PICKUP
  </Button>
  
  </View>   

        </View>
    )
}


const styles = StyleSheet.create({
    
container:{
   
width:'100%',
height:'100%',

flexDirection:'row',
flexWrap:'wrap',


},

boxyellow:{
  
  shadowOpacity:1,
  shadowRadius:1,
    width:'50%',
    padding:11,
    backgroundColor:'#E0F4EA',
    height:210,},

inner:{
    borderRadius: 5,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',

    }


})


export default HomeBoxScreen
