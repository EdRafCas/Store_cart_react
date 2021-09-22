import React from 'react';
import SliderCarousel from './Elements/SliderCarousel'

import styled from "styled-components";

const ContainerCarousel = styled.div`
 div{
   overflow:hidden;
 }
`

const App = () => {
  return ( 
    <ContainerCarousel>
      <SliderCarousel/>
    </ContainerCarousel>
    
   );
}
 
export default App;
