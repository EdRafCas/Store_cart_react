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
const OrderByContainer =styled.div`
      width: 100%;
      padding:0px;
      display: flex;
      flex-direction:row;
      justify-content:flex-end; 
      align-items:center;
      p{
            margin:0;
            }
`



const Search = (props) => {
      const {search} =useParams();
      let filteredSearchCriteria= ProductList.filter(function(items) {
            return items.category.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                   items.category.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                   items.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                   items.nametag.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
      });

      

      return ( 
            <ColectionContainer>
                  <HeadBarContainer>
                        <DirectionProduct>
                              <RedirectButtom to="/">Main</RedirectButtom>
                              <Separator>/</Separator>
                              <RedirectButtom to="/Colection">Colection</RedirectButtom>
                              <Separator>/</Separator>
                              <RedirectButtom to="#">{search}</RedirectButtom>
                        </DirectionProduct>
                        <OrderByContainer>
                              <p>hola</p>
                              <p>hola</p>
                        </OrderByContainer>      
                  </HeadBarContainer>
                  
                  <ImagesContainer>
                              <FilterBar>
                                    <FilterRoute to="/">{search}</FilterRoute>
                                    
                              </FilterBar>
                              <GalleryContainer>
                                    {filteredSearchCriteria.map((products, index)=>{
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
                  </ImagesContainer>
            </ColectionContainer>
            
            

       );
}
 
export default Search;