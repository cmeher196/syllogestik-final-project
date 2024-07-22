


//e - commerce : project
// product, wishlist, cart



//stripe api
// razorpay api (ask ur credit card)

//product  product:[] <- api
//cart -: cart:[] <- filter products from product list which would have been added by user
// wishlist screen : wishlist [] <- filter products from product list which would have been wishlisted by user



//states: //reducer //initial state
//product
//cart
// wishlist

//context api
    // intial state
    //create a context
    //[state, dispatch]


export const productReducer =(state, action) =>{

    switch (action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                cart: [...state.cart, action.payload]
            }
        
        case 'ADD_TO_WISHLIST':
            return{
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }
        
        case 'REMOVE_FROM_WISHLIST':
            return{
                ...state,
                wishlist: state.wishlist.filter(item => item.id !== action.payload)
            };
    
        default:
            return state;
    }
}    






