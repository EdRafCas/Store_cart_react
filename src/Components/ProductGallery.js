import React from 'react';
import {ProductList} from '../Elements/ProductList';
import {GalleryContainer,
      ProductContainer,
      ContainerImage,
      LinkName,
      PaymentsContainer,
      CashPriceContainer,
      PreviousPrice,
      CurrentPrice,
      CuotesPayment} from '../Elements/ElementsGallery';

const ProductGallery = () => {
      return ( 
            <GalleryContainer>
                  {ProductList.map((products, index)=>{
                        return(
                              <ProductContainer key={index}>
                                    <ContainerImage>
                                          <img src={products.src} alt={products.altText} width="100%" height="auto" />      
                                    </ContainerImage>
                                    <LinkName to={`/Colection/${products.category}/${products.nametag}`}>
                                          {products.name}
                                    </LinkName>
                                    <PaymentsContainer>
                                          <CashPriceContainer>
                                          {products.oldPrice ?
                                          <PreviousPrice> {products.oldPrice} </PreviousPrice>
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