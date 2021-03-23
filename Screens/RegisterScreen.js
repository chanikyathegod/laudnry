import React, { Component } from 'react'
import {  KeyboardAvoidingView, Image,Text, View } from 'react-native'
import { TextInput ,Button} from 'react-native-paper';
import firebase from './firebaseconfig';


export class RegisterScreen extends Component {
constructor(props){

super(props);
this.state = {

email:'',
password:'',
name:''
}

}

SignupUser = (name,email,password) => {


    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then(authenticate =>{

        return authenticate.user
        .updateProfile({
displayName:name

        }).then(()=>{
        
            firebase.database().ref('users/'+ firebase.auth().currentUser.uid).
            set({
            
            name,
            email,
            
            
            })
    
        })
    })
    
    .then(()=>{

        this.props.navigation.replace('PickupScreen') 
    })
    .catch(
error=>{

//alert(error.message)

}

    )
 


};










    render() {
        return (
<KeyboardAvoidingView 



style={{
 
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
placeholder="Name"
style={{borderBottomColor:'red',borderEndWidth:2,}}
keyboardType="email-address"
onChangeText={name => this.setState({ name })}
/>
<View style={{height:33,}}></View>
<TextInput
autoCorrect={false}
autoCapitalize='none'
keyboardType="email-address"
placeholder="Email"
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
<Button mode="contained" onPress={() =>{

this.SignupUser(
this.state.name,
this.state.email,
this.state.password,

)

}}
       
  color="#841584"
><Text>Register</Text></Button>
<View style={{height:33,}}></View>
<Button mode="contained" onPress={() => console.log('Pressed')}
      
        onPress={()=>{this.props.navigation.navigate('Login')}}
  color="#841584"
><Text>Login In</Text></Button>
</View>

          </KeyboardAvoidingView>
        )
    }
}

export default RegisterScreen
