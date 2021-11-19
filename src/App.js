import React from 'react';
import SliderCarousel from './Elements/SliderCarousel'
import Banner from './Elements/Banner';
import WebBanner from './Elements/WebBanner';
import ProductGallery from './Components/ProductGallery';
import SocialNetworkBar from './Components/SocialNetworkBar'

import styled from "styled-components";

const ContainerCarousel = styled.div`
  width:100%;
  max-height:504px;
  overflow:hidden;
`
const MainPage = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  overflow:hidden;

`

const App = () => {
  return ( 
    <MainPage>
      <ContainerCarousel>
        <SliderCarousel/>
      </ContainerCarousel>
      <Banner/>
      <WebBanner/>
      <ProductGallery/>
      <SocialNetworkBar/>
    </MainPage>
    
    
    
   );
}
 
export default App;
