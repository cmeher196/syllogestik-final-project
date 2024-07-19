import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';


const HomeScreen =({navigation})=>{

    const handleGotoProductPage =() =>{
        console.log("I m from Home page");
        navigation.navigate('ProductScreen',{
            userName : 'HariShankar'
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Home Screen
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={handleGotoProductPage}
            >
             <Ionicons name='home' size={40}/>      
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'    
    },
    text:{
        fontSize:30,
        fontWeight:'300'
    },
    button:{
        margin: 16,
        borderWidth: 2,
        borderColor : 'red',
        backgroundColor:'red'
    },
    btnText :{
        fontSize:25,
    }
})
