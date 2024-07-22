import {useContext} from 'react';
import { ProductContext } from '../contexts/Product.context';
import { FlatList} from 'react-native';


export const CartScreen = () =>{
    const {state} = useContext(ProductContext);

    return (
        <FlatList
            data={state.cart}
            // renderItem={({item})=> {}
            keyExtractor={(item)=> item.id.toString()}
        />
    )
}