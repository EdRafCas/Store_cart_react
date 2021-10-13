import React, {useState} from 'react';

const CartIndexContext = React.createContext();

const CartShopProvider = ({children}) => {
     const [cart, modifyCart] = useState([]);
     const [amountProduct, changeAmountProduct] = useState(1);

     const addProductToCart = (idProductToAdd, nameProductToAdd, oldPriceProductToAdd, priceProductToAdd, nametagProductToAdd, altProductToAdd) =>{
           if(cart.length === 0) {
                  modifyCart([{id:idProductToAdd, name:nameProductToAdd, oldPrice:oldPriceProductToAdd, price:priceProductToAdd, nametagProductToAdd, alt:altProductToAdd, amount:1}])
                  console.log(cart)
           } else {
                  const newCart = [...cart];
                  const alreadyInCart = newCart.filter((productInCart)=>{
                        return productInCart.id === idProductToAdd}).length > 0;

                  if(alreadyInCart){
                        newCart.forEach((productInCart, index) =>{
                              if(productInCart.id=== idProductToAdd){
                                    const amount = newCart[index].amount
                                    newCart[index] ={
                                          id:idProductToAdd,
                                          name:nameProductToAdd,
                                          amount:amount+1
                                    }
                              }
                        });
                  

                  } else {
                        newCart.push(
                              {
                                    id:idProductToAdd,
                                    name:nameProductToAdd, 
                                    amount:1
                              }
                        )
                  }
                  modifyCart(newCart);
                  console.log(cart)
           }
     };
    

      return(
            <CartIndexContext.Provider value={{cart:cart,
                                                modifyCart:modifyCart,
                                                amountProduct:amountProduct,
                                                changeAmountProduct:changeAmountProduct,
                                                addProductToCart:addProductToCart}}>
                  {children}
            </CartIndexContext.Provider>
      )
}

export {CartShopProvider, CartIndexContext}