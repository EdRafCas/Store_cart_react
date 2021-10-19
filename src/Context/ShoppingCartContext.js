import React, {useState} from 'react';

const CartIndexContext = React.createContext();

const CartShopProvider = ({children}) => {
     const [cart, modifyCart] = useState([]);
     const [amountProduct, changeAmountProduct] = useState(1);

     const addProductToCart = (idProductToAdd, photoProductToAdd, nameProductToAdd, oldPriceProductToAdd, priceProductToAdd, nametagProductToAdd, altProductToAdd) =>{
           if(cart.length === 0) {
                  modifyCart([{id:idProductToAdd, src:photoProductToAdd, name:nameProductToAdd, oldPrice:oldPriceProductToAdd, price:priceProductToAdd, nametag:nametagProductToAdd, alt:altProductToAdd, amount:1, subtotal:priceProductToAdd}])
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
                                          nametag:nametagProductToAdd,
                                          alt:altProductToAdd,
                                          amount:amount+1,
                                          subtotal: (amount+1)*priceProductToAdd
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
                                    nametag:nametagProductToAdd,
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
                  if(productInCart.id=== idProductToAdd && amountProductToAdd >=2){
                        const amount = newCart[index].amount
                        newCart[index] ={
                              id:idProductToAdd,
                              src:photoProductToAdd,
                              name:nameProductToAdd,
                              oldPrice:oldPriceProductToAdd,
                              price:priceProductToAdd,
                              nametag:nametagProductToAdd,
                              alt:altProductToAdd,
                              amount:amount-1,
                              subtotal: (amount-1)*priceProductToAdd
                        }
                  }
            });
            modifyCart(newCart);
            console.log(cart);
      } else{
            console.log("you should not be seeing this");
      }
     };
    
     const removeProductFromCart = (idProductToAdd) =>{
           if(idProductToAdd){
                  const newCart = cart.filter(product =>product.id !==idProductToAdd)
                  modifyCart(newCart);
                  console.log(cart);
           } else {
                  console.log("remove failed");
           }
     };



      return(
            <CartIndexContext.Provider value={{cart:cart,
                                                modifyCart:modifyCart,
                                                amountProduct:amountProduct,
                                                changeAmountProduct:changeAmountProduct,
                                                addProductToCart:addProductToCart,
                                                reduceProductInCart:reduceProductInCart,
                                                removeProductFromCart:removeProductFromCart
                                                }}>
                  {children}
            </CartIndexContext.Provider>
      )
}



export {CartShopProvider, CartIndexContext}