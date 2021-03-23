import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen'
import { navigationRef } from "./Screens/RootNavigation"
import SideMenu from "./Screens/SideMenu";
import  Entypo from 'react-native-vector-icons/Entypo';

import RegisterScreen from './Screens/RegisterScreen'
import LoginScreen from "./Screens/LoginScreen";
import PickupScreen from "./Screens/PickupScreen";
import { ActivityIndicator,View } from 'react-native';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStack = ()=>{

  return(
  
  <Stack.Navigator>
    <Stack.Screen name="Home"   options={{headerShown:false}}  component={HomeScreen} />

    <Stack.Screen name="Login"   options={{headerShown:false}}  component={LoginScreen} />
    <Stack.Screen name="Register"   options={{headerShown:false}}  component={RegisterScreen} />
    <Stack.Screen name="PickupScreen"   options={{headerShown:false}}  component={PickupScreen} />

  </Stack.Navigator>
  
  )
  
  
  }

  

export default function App() {

       const [isLoading, setisLoading] = React.useState(true);

   





React.useEffect(() => {
 setTimeout(()=>{

  setisLoading(false);

 },1000)
}, [])




if(isLoading){

return(

<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<ActivityIndicator size="large" color="#0077B5"  />


</View>



)



}





  return (
    
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={ props => <SideMenu {...props} />  }>
        <Drawer.Screen name="Home" component={HomeStack}
        options={{
          drawerIcon: () => <Entypo      
          name='user'  style={{fontSize:22,
              color:'black',textAlign:'left'}} />
          
          }}
          />
        
        <Drawer.Screen name="Profile" options={{
      drawerIcon: () => <Entypo      
      name='user'  style={{fontSize:22,
          color:'black',textAlign:'left'}} />
      
      }}  component={HomeStack} />
       
       



<Drawer.Screen name="Delivery Request" options={{headerShown:false,
      drawerIcon: () => <Entypo      
      name='list'  style={{fontSize:22,
          color:'black',textAlign:'left'}} />
      
      }}  component={HomeStack} />

<Drawer.Screen name="Rate Chart" options={{headerShown:false,
      drawerIcon: () => <Entypo      
      name='bar-graph'  style={{fontSize:22,
          color:'black',textAlign:'left'}} />
      
      }}   component={HomeStack} />

<Drawer.Screen name="Delivery List" options={{headerShown:false,
      drawerIcon: () => <Entypo      
      name='list'  style={{fontSize:22,
          color:'black',textAlign:'left'}} />
      
      }}   component={HomeStack} />
     
     <Drawer.Screen name="Order History" options={{headerShown:false,
      drawerIcon: () => <Entypo      
      name='back-in-time'  style={{fontSize:22,
          color:'black',textAlign:'left'}} />
      
      }}  component={HomeStack} />
     
     <Drawer.Screen name="Share " options={{headerShown:false,
      drawerIcon: () => <Entypo      
      name='share'  style={{fontSize:22,
          color:'black',textAlign:'left'}} />
      
      }}   component={HomeStack} />
     

     <Drawer.Screen name="Term & Conditions " options={{headerShown:false,
      drawerIcon: () => <Entypo      
      name='news'  style={{fontSize:22,
          color:'black',textAlign:'left'}} />
      
      }}  component={HomeStack} />
     


     <Drawer.Screen name="Logout" options={{headerShown:false,
      drawerIcon: () => <Entypo      
      name='share-alternative'  style={{fontSize:22,
          color:'black',textAlign:'left'}} />
      
      }}  component={HomeStack} />
     

     












      </Drawer.Navigator>
    </NavigationContainer>
  );
}