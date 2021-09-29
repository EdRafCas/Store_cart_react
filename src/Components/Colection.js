import React from 'react';
import styled from 'styled-components';
import ProductGallery from './ProductGallery';
import {Link} from "react-router-dom";

const GalleryContainer = styled.div`
      width: 100%;
      display: grid;
      gap:20px;
      grid-template-columns: 1fr 4fr;
      `
const FilterBar =styled.div`
      width:100%;
      `
const ColectionContainer =styled.div`
      width: 100%;
      display: flex;
      flex-direction:column;
`
const ColectionBar =styled.div`
      width:100%;
      display: grid;
      gap:00px;
      grid-template-columns: 3fr 1fr;
`

const OrderByContainer =styled.div`
      width: 100%;
      display: flex;
      flex-direction:row;
      justify-content:flex-end;
      
`
const RedirectButtom =styled(Link)`
      font-size:16px;
      display:inline-block;
      width:auto;
      padding:15px 15px 15px 0px;
      text-decoration:none;
      color:#000;

      &:hover{
            text-decoration:underline;
            color:#000;
      }
`

const Colection = () => {
      return ( 
            <ColectionContainer>
                  
                  <ColectionBar>
                        <RedirectButtom to="/">Main</RedirectButtom>
                        <OrderByContainer>
                              <span>1</span>
                              <span>2</span>
                        </OrderByContainer>
                  </ColectionBar>
                  <GalleryContainer>
                        <FilterBar/>
                        <ProductGallery/>
                  </GalleryContainer>
            </ColectionContainer>
            
            

       );
}
 
export default Colection;