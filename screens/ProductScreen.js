import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {useRoute} from '@react-navigation/native';

// const ProductScreen =({route})=>{

const ProductScreen =()=>{

    const route = useRoute();
    const userName = route.params.userName;

    return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Product Screen : {userName}
        </Text>
    </View>
    )
}

export default ProductScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'    
    },
    text:{
        fontSize:20,
        fontWeight:'300'
    }
})
