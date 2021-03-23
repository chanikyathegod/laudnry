import React, { Component } from 'react'
import {  KeyboardAvoidingView, Image,Text, View } from 'react-native'
import { TextInput ,Button} from 'react-native-paper';

import firebase from './firebaseconfig';


export class LoginScreen extends Component {


    constructor(props){

        super(props);
        this.state = {
        
        email:'',
        password:'',
    
        }
        
        }





signInUser = (email,password)=>{

firebase
.auth()
.signInWithEmailAndPassword(email,password)
.then(()=>{

this.props.navigation.replace("PickupScreen");

})
.catch((error)=>{

alert(error.message);

})




}








    render() {
        return (
<KeyboardAvoidingView style={{
 
    flex:1,justifyContent:'center',padding:22,   alignContent:'center',
          }}>
  <Image
     style={{marginLeft:33,}}
        source={require('.././assests/logo.png')}
      />
      <View style={{height:33,}}></View>
<View style={{}}>
<TextInput

autoCorrect={false}
autoCapitalize='none'
placeholder="Email"
style={{borderBottomColor:'red',borderEndWidth:2,}}
keyboardType="email-address"
onChangeText={email => this.setState({ email })}
/>
<View style={{height:33,}}></View>
<TextInput
autoCorrect={false}
autoCapitalize='none'
keyboardType="email-address"
placeholder="password"
onChangeText={password => this.setState({ password })}
/>
<View style={{height:33,}}></View>
<Button mode="contained" onPress={() => {
    this.signInUser(this.state.email,this.state.password)

}}
       
  color="#841584"
><Text>Login</Text></Button>
<View style={{height:33,}}></View>
<Button mode="contained" onPress={() => console.log('Pressed')}
     
       
    onPress={() => { this.props.navigation.navigate('Register')  }}

>

<Text>Sign Up</Text></Button>
</View>

          </KeyboardAvoidingView>
        )
    }
}

export default LoginScreen
