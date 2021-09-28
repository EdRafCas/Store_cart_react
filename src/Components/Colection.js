import React from 'react';
import styled from 'styled-components';
import ProductGallery from './ProductGallery';

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
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      `

const Colection = () => {
      return ( 
            <ColectionContainer>
                  
                  <ColectionBar>
                        <h1>2</h1>
                        <h1>2</h1>
                  </ColectionBar>
                  <GalleryContainer>
                        <FilterBar/>
                        <ProductGallery/>
                  </GalleryContainer>
            </ColectionContainer>
            
            

       );
}
 
export default Colection;