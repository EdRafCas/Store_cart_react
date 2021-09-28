import React from 'react';
import styled from 'styled-components';
import Product1 from './../img/product-1.jpg';
import Product2 from './../img/product-2.jpg';
import Product3 from './../img/product-3.jpeg';
import Product4 from './../img/product-4.jpg';
import Product5 from './../img/product-5.jpeg';
import Product6 from './../img/product-6.jpeg';
import Product7 from './../img/product-7.jpg';
import Product8 from './../img/product-8.jpg';

const GalleryContainer = styled.div`
      width: 100%;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);

      /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
`
const GalleryProducts = [
      { id: 1,
        src: Product1,
        name: "Red Cargo Pants",
        alt:"Red cargo pants",
        price: "5600.00",
        sharePrice: "1300",
        
      },
      { id: 2,
        src: Product2,
        name: "Red Cargo Pants",
        alt:"Red cargo pants",
        price: "5600.00",
        sharePrice: "1300",
        oldprice: "$6500"
      },
      { id: 3,
        src: Product3,
        name: "Red Cargo Pants",
        alt:"Red cargo pants",
        price: "5600.00",
        sharePrice: "1300",
        
      },
      { id: 4,
        src: Product4,
        name: "Red Cargo Pants",
        alt:"Red cargo pants",
        price: "5600.00",
        sharePrice: "1300",
        oldprice: "$6500"
      },
      
      { id: 5,
        src: Product5,
        name: "Red Cargo Pants",
        alt:"Red cargo pants",
        price: "5600.00",
        sharePrice: "1300",
        
      },
      
      { id: 6,
        src: Product6,
        name: "Red Cargo Pants",
        alt:"Red cargo pants",
        price: "5600.00",
        sharePrice: "1300",
        oldprice: "$6500"
      },
      
      { id: 7,
        src: Product7,
        name: "Red Cargo Pants",
        alt:"Red cargo pants",
        price: "5600.00",
        sharePrice: "1300",
        oldprice: "$6500"
      },
      { id: 8,
        src: Product8,
        name: "Red Cargo Pants",
        alt:"Red cargo pants",
        price: "5600.00",
        sharePrice: "1300",
        oldprice: "$6500"
      },
      
      
    ];
const ProductContainer = styled.div`
      font-family: "Montserrat", Sans-serif;
`
const ContainerImage = styled.a`
`
const LinkName =styled.a`
      margin:5px;
      display:block;
      text-align:center;
      font-size:12px;
      cursor: pointer;
      text-transform: uppercase;
      text-decoration:none;
      color: #000;

`
const PaymentsContainer = styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

`
const CashPriceContainer =styled.div`
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      font-size:16px;
`
const PreviousPrice =styled.span`
      margin-right:5px;
      padding:0 5px;
      text-decoration:line-through;
`
const CurrentPrice =styled.span`
      text-transform: uppercase;
      font-weight:bold;
`
const CuotesPayment = styled.div`
      width:100%;
      border: 1px solid rgba(27, 27, 27, 0.3);
      text-align:center;
      font-size:13px;
      padding: 5px 10px;
      margin-bottom: 5px;
      

      

`

const ProductGallery = () => {
      return ( 
            <GalleryContainer>
                  {GalleryProducts.map((products, index)=>{
                        return(
                              <ProductContainer key={index}>
                                    <ContainerImage>
                                          <img src={products.src} alt={products.altText} width="100%" height="auto" />      
                                    </ContainerImage>
                                    <LinkName>
                                          {products.name}
                                    </LinkName>
                                    <PaymentsContainer>
                                          <CashPriceContainer>
                                          {products.oldprice ?
                                          <PreviousPrice> {products.oldprice} </PreviousPrice>
                                          :""}
                                          <CurrentPrice>${products.price}</CurrentPrice>
                                          </CashPriceContainer>
                                          <CuotesPayment>
                                                <p> <b>6</b> payments of <b>${products.sharePrice}</b>  with no interest</p>
                                          </CuotesPayment>
                                    </PaymentsContainer>
                                    
                              </ProductContainer>
                        )
                  })}
            </GalleryContainer>
       );
}
 
export default ProductGallery;