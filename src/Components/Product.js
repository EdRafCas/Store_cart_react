import React,{useContext} from 'react';
import {useParams} from  'react-router-dom';
import styled from 'styled-components';
import ProductList from './../Elements/ProductList';
import {RedirectButtom,Separator, DirectionProduct}  from './../Elements/ElementsProductList'
import {CartIndexContext} from '../Context/ShoppingCartContext';

const ContainerProductPage=styled.div`
      display:flex;
      width:100%;
      flex-direction:column;
      padding-top:5px;

`
const InnerContainer=styled.div`
      width:100%;
      display: grid;
      gap:00px;
      grid-template-columns: repeat(2, 1fr);

`
const ProductDisplay=styled.div`
      width:100%;
      display: grid;
      gap:10px;
      grid-template-columns: 1fr 4fr;
      grid-template-rows: 1fr 1fr;
`
const SmallPhotos=styled.div`
      width: 100%;
      display: grid;
      gap:10px;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      img{
            width:100%;
            height:auto;
            min-width:95px;
      }
`

const BigPhoto=styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      img{
            width:100%;
            height:auto;
            max-width:100%;
            min-width:300px;
      }

`
const ShoppingOrder=styled.div` 
      width:100%;
      display:flex;
      flex-direction:column;
`

const ProductName =styled.h1`
      margin:15px;
      display:block;
      text-align:left;
      font-size:24px;
      cursor: pointer;
      text-transform: uppercase;
      text-decoration:none;
      color: #000;

`
const CashPriceContainer =styled.div` 
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      margin-left:10px;
      font-size:16px;
      align-items:center;
`
const PreviousPrice =styled.span` 
      margin-right:5px;
      margin-bottom:0px;
      padding:0 5px;
      text-decoration:line-through;
      font-size:20px;
      opacity:0.8;
`
const CurrentPrice =styled.span` 
      text-transform: uppercase;
      font-weight:bold;
      font-size:32px;
      line-height:30px;
      background:#000;
      color:#fff;
`
const PaymentMethodsContainer=styled.div`
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
`
const CuotesPayment = styled.div`

      width:auto;
      border: 1px solid rgba(27, 27, 27, 0.3);
      text-align:center;
      font-size:13px;
      padding: 5px 10px;
      margin-top:30px;
      margin-bottom: 5px;   
`
const AddToCartButton=styled.button`
      display:block;
      padding: 9px 12px;
      background:#000;
      color:#fff;
      font-weight:400;
      font-size:18px;

`
                  
const Product = (props) => {
      const {nametag} =useParams();
      const {addProductToCart} =useContext(CartIndexContext);
      var filteredTagName = ProductList.filter(function(items) {
            return items.nametag === nametag
      });
      
      /* console.log(nametag);
      console.log(ProductList);
      console.log(filteredTagName); */

      return ( 
      <>
            { filteredTagName ?
                  <ContainerProductPage>
                        <DirectionProduct>
                              <RedirectButtom to="/"> Main</RedirectButtom> 
                              <Separator>/</Separator> 
                              <RedirectButtom to="/Colection"> Colection</RedirectButtom>
                              <Separator>/</Separator> 
                              <RedirectButtom to="/Colection"> Colection</RedirectButtom>
                              <Separator>/</Separator> 
                        </DirectionProduct>
                        <InnerContainer>
                              <ProductDisplay>
                                    <SmallPhotos>
                                          <img alt="" src={filteredTagName[0].src}></img>
                                          <img alt="" src={filteredTagName[0].src}></img>
                                          <img alt="" src={filteredTagName[0].src}></img>
                                          
                                    </SmallPhotos>
                                    <BigPhoto>
                                          <img src={filteredTagName[0].src} alt={filteredTagName[0].name}></img>
                                    </BigPhoto>
                              </ProductDisplay>
                              <ShoppingOrder>
                                    <ProductName>{filteredTagName[0].name}</ProductName>
                                    <CashPriceContainer>
                                          {filteredTagName[0].oldPrice ?
                                                <PreviousPrice>{filteredTagName[0].oldPrice}</PreviousPrice>
                                          :
                                          ""
                                          }
                                          <CurrentPrice>${filteredTagName[0].price}</CurrentPrice>
                                    </CashPriceContainer>
                                    <PaymentMethodsContainer>
                                          <CuotesPayment>
                                                <p> <b>6</b> payments of <b>${filteredTagName[0].sharePrice}</b>  with no interest</p>
                                          </CuotesPayment>
                                    </PaymentMethodsContainer>    
                                    <AddToCartButton onClick={()=>addProductToCart(
                                    filteredTagName[0].id,
                                    filteredTagName[0].src,
                                    filteredTagName[0].name,
                                    filteredTagName[0].oldPrice,
                                    filteredTagName[0].price,
                                    filteredTagName[0].nametag,
                                    filteredTagName[0].alt)}>ADD TO CART</AddToCartButton>
                              </ShoppingOrder>
                        </InnerContainer>


                  </ContainerProductPage>
            :
            ""
            }
      </>   
       );
}
 
export default Product;