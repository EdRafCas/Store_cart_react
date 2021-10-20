import React from 'react';
import styled from 'styled-components';
import ProductGallery from './ProductGallery';

import {RedirectButtom,Separator,DirectionProduct,FilterRoute} from '../Elements/ElementsProductList';


const GalleryContainer = styled.div`
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

const Colection = () => {
      return ( 
            <ColectionContainer>
                  <HeadBarContainer>
                        <DirectionProduct>
                              <RedirectButtom to="/">Main</RedirectButtom>
                              <Separator>/</Separator>
                              <RedirectButtom to="#">PRODUCT</RedirectButtom>
                              <Separator>/</Separator>  
                        </DirectionProduct>
                        <OrderByContainer>
                              <p>hola</p>
                              <p>hola</p>
                        </OrderByContainer>      
                  </HeadBarContainer>
                  
                  <GalleryContainer>
                              <FilterBar>
                                    <FilterRoute to="/">Pants</FilterRoute>
                                    <FilterRoute to="/Main">Shirts</FilterRoute>
                                    <FilterRoute to="/Main">Outfits</FilterRoute>
                                    <FilterRoute to="/Main">Headwear</FilterRoute>
                                    <FilterRoute to="/Main">T-shirts</FilterRoute>
                                    <FilterRoute to="/Main">Accesories</FilterRoute>
                              </FilterBar>
                              <ProductGallery/>                            
                  </GalleryContainer>
            </ColectionContainer>
            
            

       );
}
 
export default Colection;