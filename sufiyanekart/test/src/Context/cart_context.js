import { createContext ,useContext,useEffect,useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CartContext =createContext();
const getLocalCartData=()=>{
  let localCardData=localStorage.getItem("ecart");
  if(localCardData === []){
    return [];
  }else{
    return JSON.parse(localCardData);
  }
};
const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
  };
const CartProvider =({children})=>{

const [state, dispatch] = useReducer(reducer, initialState);
const addToCart = (id, color, amount, product) => {
dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product }});
};
//increment and decrement the produt from card
const setDecrease =(id)=>{
 dispatch({type: "SET_DECRMENT", payload: id});
};
const setIncrease =(id)=>{
  dispatch({type: "SET_INCREMENT", payload: id});
 };

// to remove item from card
const removeItem = (id) => {
  dispatch({ type: "REMOVE_ITEM", payload: id });
};
// to clearCart
const clearCart =()=>{
  dispatch({ type: "CLEAR_CART"});
}
// to add the deta  in localstore
//grt vs set
useEffect(()=>{
  dispatch({type: "CART_TOTAL_ITEM"});
  dispatch({type: "CART_TOTAL_PRICE"});
  localStorage.setItem("ecart", JSON.stringify(state.cart))
},[state.cart]);
 return(
 <CartContext.Provider value={{
   ...state, addToCart,removeItem,clearCart,
   setDecrease,
   setIncrease,
   
   }}>
       {children}
 </CartContext.Provider>
 );
};

const useCartContext =()=>{
    return useContext(CartContext);
};
export {CartProvider,useCartContext};