import styled from "styled-components";
import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import ZipCodeSelect from "./ZipCodeSelect";
import {ReactComponent as LogoTrash} from "../img/trash-icon.svg";
import {CartIndexContext} from './../Context/ShoppingCartContext'
import SocialNetworkBar from '../Components/SocialNetworkBar'

const CartShopContainer= styled.div`
      width:100%;

      height: auto;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
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
      min-height:60vh;
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
      @media(max-width: 720px){ 
            padding: 0px;
      }
      @media(max-width: 600px){ 
            padding: 0px;
      }
`

const DescriptionContainer = styled.div`
      display:flex;
      flex-direction:column;
      gap:10px;
`

const LinkName =styled(Link)`
      margin:5px 0px;
      display:block;
      text-align:left;
      font-size:16px;
      cursor: pointer;
      text-transform: uppercase;
      text-decoration:none;
      color: #000;
      @media(max-width: 720px){ 
            font-size:14px; 
      }
      @media(max-width: 600px){ 
            font-size:12px; 
      }
      
`
const ProductPrice=styled.div`
      @media(max-width: 720px){ 
            font-size:14px; 
      }
      @media(max-width: 600px){ 
            font-size:12px; 
      }

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
      @media(max-width: 720px){ 
            font-size:14px; 
      }
      @media(max-width: 600px){ 
            font-size:12px; 
      }
`
const ContainerIcon=styled.button`
      height:20px;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      height:auto;
      border:none;
      background:none;
`
const RemovefromCart=styled(LogoTrash)`
      height:50%;
      width:auto;
      min-height:20px;
`

const EmptyCart=styled.div`
      display:block;
      box-sizing: border-box;
      padding: 5px 0;
      text-align: center;
      background: none;
      font-size: 14px;
      border: 0;
      border-radius: 0;
      text-transform: uppercase;
      text-shadow: none;
      color: #c09853;
      margin-bottom: 20px;
`
const SubtotalContainer=styled.div`
      font-size:16px;
      font-weight:600;
      text-align:right;
      @media(max-width: 600px){ 
            font-size:14px;;   
    }
      @media(max-width: 400px){ 
                  font-size:12px;  
      }
`

const TwoColumnsContainer=styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 1fr 1fr);
      margin:30px 0px;
      padding-bottom:200px;
      @media(max-width: 720px){ 
            padding-bottom:000px;;  
    }
      
`

const FulllTotal=styled.div`
      font-size:18px;
      font-weight:800;
      text-align:right;
      @media(max-width: 600px){ 
            font-size:14px;
    }
    @media(max-width: 400px){ 
            font-size:12px;  
    }

`

const TotalContainer=styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:flex-end;
`

const CompleteOrder =styled.button`
      box-sizing: border-box;
      padding: 8px 12px;
      background-color: transparent;
      color: #000000;
      fill: #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      transition: all 0.4s ease;
      width:50%;
      border: 3px solid #000000;
      :hover{
            color:#fff;
            background:#000000;
            
            :active{
                  border: 3px double #fff;
                  font-size: 16px;
                  font-weight: 800;
            }   
      }
      @media(max-width: 600px){ 
            font-size:14px;;   
    }
`



const Cart = () => {
const {cart} =useContext(CartIndexContext);
const {addProductToCart} =useContext(CartIndexContext);
const {reduceProductInCart} =useContext(CartIndexContext);
const {removeProductFromCart} =useContext(CartIndexContext);
const {currentShippingPrice} =useContext(CartIndexContext);



const SubtotalSum = cart.reduce((total, currentValue) => total = total + currentValue.subtotal, 0)
      

      /* Number(productsInCart.amount*productsInCart.price).toFixed(2) */

      return ( 
            <CartShopContainer>
                  <Title>Cart</Title>
                  <Headline>
                        <p>product</p>
                        <p>Subtotal</p>
                  </Headline>
                  <ProductsInCart>
                        {cart.length> 0?
                        cart.map((productsInCart, index)=>{
                              return(
                              <CartProductContainer key={index}>
                                    <LeftColumn>
                                          <ImageContainer>
                                                <img src={productsInCart.src} alt={productsInCart.alt} width="100%" height="auto" /> 
                                          </ImageContainer>
                                          <DescriptionContainer>
                                                <LinkName to={`/Colection/Product/${productsInCart.nametag}`}>{productsInCart.name}</LinkName>
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
                                                      <IncreaseButton name="Increase" onClick={addProductToCart(
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
                                          <SubtotalPrice>${Number(productsInCart.subtotal).toFixed(2)}</SubtotalPrice>
                                          <ContainerIcon onClick={()=>removeProductFromCart(productsInCart.id
                                          )}>
                                                <RemovefromCart viewBox="0 0 875 1000"/>
                                          </ContainerIcon>
                                    </RightColumn>
                              </CartProductContainer>
                              )
                        })
                        : <EmptyCart>ADD SOMETHING TO YOUR CART</EmptyCart>}   
                  </ProductsInCart>
                  {cart.length> 0?
                        <TwoColumnsContainer>
                              <ZipCodeSelect/>
                              <TotalContainer>
                                    <SubtotalContainer> SUBTOTAL: ${cart.length > 0 ? Number(SubtotalSum+currentShippingPrice).toFixed(2) : "0,00"}</SubtotalContainer>
                                    <FulllTotal> TOTAL AMOUNT: ${cart.length > 0 ? Number(SubtotalSum+currentShippingPrice).toFixed(2) : "0,00"}</FulllTotal>
                                    <CompleteOrder>Buy</CompleteOrder>
                              </TotalContainer>
                                    
                        </TwoColumnsContainer>
                  :""}
            <SocialNetworkBar/>      
            </CartShopContainer>
       );
}
 
export default Cart;