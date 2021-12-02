import React from 'react';
import styled from 'styled-components';
import {useParams} from  'react-router-dom';
import { ProductList } from '../Elements/ProductList';
import {RedirectButtom,
      Separator,
      DirectionProduct,
      FilterRoute} from '../Elements/ElementsProductList';
import {GalleryContainer,
      ProductContainer,
      ContainerImage,
      LinkName,
      PaymentsContainer,
      CashPriceContainer,
      PreviousPrice,
      CurrentPrice,
      CuotesPayment} from '../Elements/ElementsGallery';


const ImagesContainer = styled.div`
      width: 100%;
      display: grid;
      gap:20px;
      grid-template-columns: 1fr 4fr;
      `
const FilterBar =styled.div`
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      align-items:flex-start;
      border:none;
      padding: 5px 10px;
      gap:20px;
      `

const ColectionContainer =styled.div`
      width: 100%;
      display: flex;
      flex-direction:column;
`
const HeadBarContainer = styled.div`
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      margin:0px;
      padding:0px;
`

const Category = (props) => {
      const {category} =useParams();
      let filteredCategory= ProductList.filter(function(items) {
            return items.category=== category
      });

      return ( 
            <ColectionContainer>
                  <HeadBarContainer>
                        <DirectionProduct>
                              <RedirectButtom to="/">Main</RedirectButtom>
                              <Separator>/</Separator>
                              <RedirectButtom to="/Colection">Colection</RedirectButtom>
                              <Separator>/</Separator>
                              <RedirectButtom to="#">{category}</RedirectButtom>
                              <Separator>/</Separator>  
                        </DirectionProduct>
                  </HeadBarContainer>
                  
                  <ImagesContainer>
                              <FilterBar>
                                    <FilterRoute to="/Colection">{category}</FilterRoute>
                                    
                              </FilterBar>
                              <GalleryContainer>
                                    {filteredCategory.map((products, index)=>{
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
                                                                  <p> <b>6</b> payments of <b>${Number((products.price*1.1)/6).toFixed(2)}</b>  with no interest</p>
                                                            </CuotesPayment>
                                                      </PaymentsContainer>
                                                      
                                                </ProductContainer>
                                          
                                          )
                                    })} 
                              </GalleryContainer>                          
                  </ImagesContainer>
            </ColectionContainer>
            
            

       );
}
 
export default Category;