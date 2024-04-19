import React, { createContext,useState,useEffect } from 'react'
import all_product from '../Components/Ecommerce_Frontend_Assets/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<300+1;index++){
        cart[index]=0;
    }
    return cart;
}
  
const ShopContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch('https://shopper-wp6m.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json', // Corrected typo here
                },
                body: JSON.stringify({ itemId: itemId }), // Corrected body format
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
    };
    
    
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://shopper-wp6m.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-Data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'appication/json',
                },
                body:({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }
    const contextValue ={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}

    return(
        <ShopContext.Provider value ={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
    
}
export default ShopContextProvider