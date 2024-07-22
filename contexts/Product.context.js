import {createContext, useReducer} from 'react';
import {productReducer} from '../globalstate/product.reducer';
//cd ..

const initialState ={
    product :[],
    wishlist :[],
    cart:[]
}

export const ProductContext = createContext(initialState);


export const ProductProvider = ({children}) =>{
    const [state, dispatch] = useReducer(productReducer,initialState)

     return(
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}


