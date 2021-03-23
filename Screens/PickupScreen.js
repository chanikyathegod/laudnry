import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper';


import firebase from './firebaseconfig';



export default class PickupScreen extends Component {

    constructor(props){
    super(props);
    this.state = {
    
    email:'',
    password:'',
    name:''
    }
    
    }


componentDidMount(){


firebase.auth().onAuthStateChanged(authenticate =>{

if(authenticate){

this.setState({
email: authenticate.email,
name: authenticate.displayName



});




} else{

this.props.navigation.replace("Login");

}

})



}



signOutUser = ()=>{

firebase
.auth()
.signOut()
.then(()=>{

console.log("sign OUt")

})
.catch( error => alert(error.message))
}


    render() {
        return (
            <View style={{flex:1}}>
<Appbar.Header>
      <Appbar.BackAction onPress={() => {this.props.navigation.replace("Home");}}  />
      <Appbar.Content title="Title"  subtitle="Subtitle" />
      <Appbar.Action icon="magnify"  />
      <Appbar.Action icon="dots-vertical"  />
    </Appbar.Header>

    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <TouchableOpacity onPress={() => {this.signOutUser()}}>  
               
               
                <Text> LogOut </Text>




           </TouchableOpacity>  
            </View>
            </View>
            
        )
    }
}

