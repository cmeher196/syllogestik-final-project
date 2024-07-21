import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{

  return(
    <Drawer.Navigator 
          screenOptions={{
            headerStyle:{backgroundColor: '#0ff'},
            contentStyle:{backgroundColor: '#aff'},
          }}
          >
          <Drawer.Screen 
            name='Feedback'
            component={Feedback}
            options={{
              title: 'My Product Home Screen'
            }}  
            />
          </Drawer.Navigator>
      )
}

export default function App() {

  return (
    <> 
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='HomeScreen'
          screenOptions={{
            headerStyle:{backgroundColor: '#0ff'},
            contentStyle:{backgroundColor: '#aff'},
          }}
          >
          <Stack.Screen 
            name='HomeScreen'
            component={HomeScreen}
            options={{
              title: 'My Product Home Screen'
            }}  
            />
          <Stack.Screen name='ProductScreen' component={ProductScreen}
            options={{
              title: 'My Product Screen',
              headerRight: ()=>{
                return <Button title='Press Me' onPress={()=>console.log('Button pressed')} />
              }
            }} 

          />
          <Stack.Screen 
            name='DrawerFeedback'
            component={DrawerNavigator}
            options={{
              title: 'My Feedback Screen'
            }}  
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

//grid : 2d
//flex : 1d

//parent flex : 1 1/2/3
//child1 flex: 1
//child2 flex : 2
//ternary operator :
// x===10 ? return true : return false

//html:10-20% 
//css : 30%
//js: 100%
//react : 100%
//native : 200%