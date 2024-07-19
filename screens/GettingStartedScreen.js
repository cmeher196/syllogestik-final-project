import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const GettingStarted = () => {

    const [showPage, setShowPage] = useState(false);
    const [username, setUsername] = useState('');
  
    const gotoNextPage = () =>{
      console.log("Button is being pressed!!");
      setShowPage(true);
    }
  
    const gotoPreviousPage = () =>{
      console.log("Button is being pressed!!");
      setShowPage(false);
    }
  
    const onTextChanged = (text) =>{
      setUsername(text);
      console.log(username);
    }
  
    const onHandlePress =()=>{
      if(username.length > 0){
        console.log("Login is working");
        setShowPage(true);
      }
    }

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'stretch', backgroundColor:'cyan' }}> 
        {!showPage ?
         (
          <View style={{flex:1, justifyContent: 'center', alignItems: 'stretch', backgroundColor:'cyan' }}> 
              <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, fontWeight:'300'}}>1st half</Text>
              </View>
          
            <View style={{flex:2, justifyContent:'center', alignItems: 'center', borderTopColor:'red', borderTopWidth: 5}}>
              <Text style={{fontSize: 30, fontWeight:'200'}}>2nd half</Text>
              <Button title='Getting started' color='red' onPress={gotoNextPage}/>
            </View>
            <View style={{flex:2, justifyContent:'center', alignItems: 'center', borderTopColor:'red', borderTopWidth: 5}}>
              <TextInput 
                placeholder='Enter your Username'
                value={username}
                onChangeText={onTextChanged}
                secureTextEntry={true}
                style={{
                  backgroundColor:'#fff',
                  justifyContent : 'space-between',
                  alignContent:'center',
                  height: 50,
                  marginBottom : 20
                }}
              />
              <Button title='Press' color='blue' onPress={onHandlePress}/>
            </View>
            
        </View>
        ) 
        : 
        (
        <View style={{flex:1, justifyContent:'center', alignItems: 'center', borderTopColor:'blue', borderTopWidth: 5}}>
          <Text style={{fontSize: 30, fontWeight:'400'}}>Section on button pressed</Text>
          <Text style={styles.textDesgin} >Desgin with SS</Text>
          <Button title='Back' color='red' onPress={gotoPreviousPage}/>
        </View>
  )}
      </View>
      
    );
    
}


const styles = StyleSheet.create({
    textDesgin:{
      fontSize :30,
      color :'#123abc'

    }
});


export default GettingStarted;