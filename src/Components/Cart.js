import styled from "styled-components";
import React,{useContext} from 'react';
import GalleryProducts from "../Elements/ProductList";
import {ReactComponent as LogoTrash} from "../img/trash-icon.svg";
import {CartIndexContext} from './../Context/ShoppingCartContext'

const CartShopContainer= styled.div`
      width:100%;
      height: auto;
      display:flex;
      flex-direction:column;
      padding:5px;
`
const Headline=styled.div`
      display:flex;
      flex-direction:row;
      width:100%;
      justify-content:space-between;

      p{
            font-size:14px;
            font-weight:normal;
            text-transform:uppercase;
      }

`
const Title = styled.h4`
      display:block;
      font-family: inherit;
      font-weight: 700;
      line-height: 20px;
      font-size:20px;
      text-align:left;
      text-transform:uppercase;
`
const ProductsInCart=styled.div`
      display:flex;
      flex-direction:column;
`

const CartProductContainer =styled.div`
      display: grid;
      gap:20px;
      grid-template-columns: 4fr 1fr;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding:10px 0px;
      line-height:20px;
`

const LeftColumn=styled.div`
      display: grid;
      gap:20px;
      grid-template-columns: 1fr 3fr;
`
const RightColumn=styled.div`
      display: grid;
      gap:20px;
      grid-template-columns: 7fr 1fr;
      grid-template-rows: 40px;

`
const ImageContainer=styled.div`
      padding: 5px;
      `

const DescriptionContainer = styled.div`
      display:flex;
      flex-direction:column;
      gap:10px;

`

const ProductName=styled.div`

      a{ 
      text-decoration:none;
      color:#000;
      font-size:16px;

      }
`
const ProductPrice=styled.div`

`
const ProductCuantity=styled.div`
      display:flex;
      flex-direction:row;
      justify-content:flex-start;


`
const ReduceButton =styled.button`
      padding:0px 5px;
      border:solid 1px black;
`
const AmountToBuy=styled.div`
      padding:0px 10px;
      border:solid 1px black;
`

const IncreaseButton=styled.button`
      padding:0px 5px;
      border:solid 1px black;
`
const SubtotalPrice=styled.div`
      display:flex;
      flex-direction:row;
      justify-content:flex-end;
      align-items:right;
      font-size:16px;
`
const ContainerIcon=styled.div`
      height:20px;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      height:auto;
      

`
const RemovefromCart=styled(LogoTrash)`
      height:50%;
      width:auto;
      min-height:20px;

`



const Cart = () => {
const {amountProduct} = useContext(CartIndexContext);
const {changeAmountProduct} =useContext(CartIndexContext);
const {cart} =useContext(CartIndexContext);
const {addProductToCart} =useContext(CartIndexContext);
const {reduceProductInCart} =useContext(CartIndexContext);


const modifyAmount = (e) => {
      if(e.target.name==="Increase" && amountProduct >=1) {
            changeAmountProduct(amountProduct +1)}
      if(e.target.name==="Reduce" && amountProduct >=2) {
            changeAmountProduct(amountProduct -1)}
      }


      return ( 
            <CartShopContainer>
                  <Title>Cart</Title>
                  <Headline>
                        <p>product</p>
                        <p>Subtotal</p>
                  </Headline>
                  <ProductsInCart>
                        {cart.map((productsInCart, index)=>{
                              return(
                              <CartProductContainer>
                                    <LeftColumn>
                                          <ImageContainer>
                                                <img src={productsInCart.src} alt={productsInCart.alt} width="100%" height="auto" /> 
                                          </ImageContainer>
                                          <DescriptionContainer>
                                                <ProductName> <a href="/#">{productsInCart.name}</a></ProductName>
                                                <ProductPrice>${productsInCart.price}</ProductPrice>
                                                <ProductCuantity>
                                                      <ReduceButton name="Reduce" onClick={()=>reduceProductInCart(
                                                                                                productsInCart.id,
                                                                                                productsInCart.src,
                                                                                                productsInCart.name,
                                                                                                productsInCart.oldPrice,
                                                                                                productsInCart.price,
                                                                                                productsInCart.nametag,
                                                                                                productsInCart.alt,
                                                                                                productsInCart.amount
                                                                                                )}>-</ReduceButton>
                                                      <AmountToBuy>{productsInCart.amount}</AmountToBuy>
                                                      <IncreaseButton name="Increase" onClick={()=>addProductToCart(
                                                                                                productsInCart.id,
                                                                                                productsInCart.src,
                                                                                                productsInCart.name,
                                                                                                productsInCart.oldPrice,
                                                                                                productsInCart.price,
                                                                                                productsInCart.nametag,
                                                                                                productsInCart.alt)}>+</IncreaseButton>
                                                </ProductCuantity>
                                          </DescriptionContainer>
                                    </LeftColumn>
                                    <RightColumn>
                                          <SubtotalPrice>${
                                          Number(productsInCart.amount*productsInCart.price).toFixed(2)
                                          }</SubtotalPrice>
                                          <ContainerIcon><RemovefromCart viewBox="0 0 875 1000"/></ContainerIcon>
                                    </RightColumn>
                              </CartProductContainer>
                              )
                        })}
                        
                  </ProductsInCart>
            </CartShopContainer>
       );
}
 
export default Cart;