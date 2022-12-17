import React from 'react'

const cartReducer = (state, action) => {
if (action.type === "ADD_TO_CART"){
   let { id, color, amount, product } = action.payload;
//    console.log("this is produt",product);

let cartProduct;
cartProduct = {
  id: id + color,
  name: product.name,
  color,
  amount,
  image: product.image[0].url,
  price: product.price,
  max: product.stock,
};
return {
    ...state,
    cart: [...state.cart, cartProduct],
  };
}
//to set increment and decrement
if(action.type === "SET_DECRMENT"){
let updatedProdut = state.cart.map((curElem)=>{
 if(curElem.id=== action.payload){
  // console.log("macth",curElem);
  let decAmount = curElem.amount -1;
if(decAmount <= 1){
decAmount = 1;
}
  return{
    ...curElem,
    amount:decAmount,
  };
 }else{
  return curElem;
 }
});
return {...state, cart:updatedProdut };
}
//set SET_INCREMENT
if(action.type === "SET_INCREMENT"){
  let updatedProdut = state.cart.map((curElem)=>{
   if(curElem.id=== action.payload){
    // console.log("macth",curElem);
    let incAmount = curElem.amount +1;
  if(incAmount >= curElem.max){
  incAmount = curElem.max;
  }
    return{
      ...curElem,
      amount:incAmount,
    };
   }else{
    return curElem;
   }
  });
  return {...state, cart:updatedProdut };
  }
if (action.type === "REMOVE_ITEM") {
  let updatedCart = state.cart.filter(
    (curItem) => curItem.id !== action.payload
  );
  return {
    ...state,
    cart: updatedCart,
  };
}
//to clear card or empty
if(action.type === "CLEAR_CART"){
 return{
  ...state,
  cart:[],
 };
}
if(action.type== "CART_TOTAL_ITEM"){
let updatedItemVal= state.cart.reduce((initialVal,curElem)=>{
  let {amount} = curElem;
  initialVal = initialVal + amount;
  return initialVal;
},0);
 return {
  ...state,
  total_item: updatedItemVal,
 };
}
if(action.type === "CART_TOTAL_PRICE"){
let total_amount = state.cart.reduce((initialVal,curElem)=>{
let {price,amount}= curElem;
initialVal = initialVal + price * amount;

return initialVal;
},0);
return {
  ...state,
  total_amount,
};
}
  return state;
    
};

export default cartReducer;
