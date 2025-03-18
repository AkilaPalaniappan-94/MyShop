import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

export const cartReducer=(state={cartItems:[]},action)=>{
    
    switch(action.type){
        case ADD_TO_CART:{
            const item=action.payload
               
            const exist_item=state.cartItems.find(x => x.product === item.product)
           
            if (exist_item){
                console.log("item exists in cart")
                console.log("item.qty"+item.qty)
                console.log("existitem.qty"+exist_item.qty)
                item.qty=exist_item.qty+item.qty
                return{
                    ...state,
                    cartItems:state.cartItems.map(x=>x.product===exist_item.product?item:x)
            }
        }
            else{
                console.log("item doesnt exist")
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            
            }
        }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(x=>x.product!==action.payload)
            }



        case SAVE_SHIPPING_ADDRESS:
            return{
                ...state,
                shippingAddress:action.payload
            }

        default:return state
        
    }
    }




