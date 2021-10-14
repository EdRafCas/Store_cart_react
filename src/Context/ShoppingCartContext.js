import React, {useState} from 'react';

const CartIndexContext = React.createContext();

const CartShopProvider = ({children}) => {
     const [cart, modifyCart] = useState([]);
     const [amountProduct, changeAmountProduct] = useState(1);

     const addProductToCart = (idProductToAdd, photoProductToAdd, nameProductToAdd, oldPriceProductToAdd, priceProductToAdd, nametagProductToAdd, altProductToAdd) =>{
           if(cart.length === 0) {
                  modifyCart([{id:idProductToAdd, src:photoProductToAdd, name:nameProductToAdd,  oldPrice:oldPriceProductToAdd, price:priceProductToAdd, nametagProductToAdd, alt:altProductToAdd, amount:1}])
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
                                          src:photoProductToAdd,
                                          name:nameProductToAdd,
                                          oldPrice:oldPriceProductToAdd,
                                          price:priceProductToAdd,
                                          nametagProductToAdd,
                                          alt:altProductToAdd,
                                          amount:amount+1
                                    }
                              }
                        });
                  

                  } else {
                        newCart.push(
                              {
                                    id:idProductToAdd,
                                    src:photoProductToAdd,
                                    name:nameProductToAdd,
                                    oldPrice:oldPriceProductToAdd,
                                    price:priceProductToAdd,
                                    nametagProductToAdd,
                                    alt:altProductToAdd, 
                                    amount:1
                              }
                        )
                  }
                  modifyCart(newCart);
                  console.log(cart)
           }
     };

     const reduceProductInCart = (idProductToAdd, photoProductToAdd, nameProductToAdd, oldPriceProductToAdd, priceProductToAdd, nametagProductToAdd, altProductToAdd, amountProductToAdd) =>{
      if(amountProductToAdd >=1){
            const newCart = [...cart];
            newCart.forEach((productInCart, index) =>{
                  if(productInCart.id=== idProductToAdd && amountProductToAdd >=1){
                        const amount = newCart[index].amount
                        newCart[index] ={
                              id:idProductToAdd,
                              src:photoProductToAdd,
                              name:nameProductToAdd,
                              oldPrice:oldPriceProductToAdd,
                              price:priceProductToAdd,
                              nametagProductToAdd,
                              alt:altProductToAdd,
                              amount:amount-1
                        }
                  }
            });
            modifyCart(newCart);
            console.log(cart);
      } else{
            console.log("you should not be seeing this");
      }
     };
    
      return(
            <CartIndexContext.Provider value={{cart:cart,
                                                modifyCart:modifyCart,
                                                amountProduct:amountProduct,
                                                changeAmountProduct:changeAmountProduct,
                                                addProductToCart:addProductToCart,
                                                reduceProductInCart:reduceProductInCart,
                                                }}>
                  {children}
            </CartIndexContext.Provider>
      )
}

export {CartShopProvider, CartIndexContext}