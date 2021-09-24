import React from 'react';
import styled from 'styled-components';

const ContainerBanner = styled.div`
      box-sizing: border-box;
      display:flex;
      flex-direction:column;
      align-items:center;
      width:100%;
      margin-top:80px;
      
      p{
            font-size:24px;
            text-transform: uppercase;
            text-align:center;
            font-weight:700;
            color: #535353;

      }
`

const Banner = () => {
      return ( 
            <ContainerBanner>
                  <p>Choose, pay,  and receive your order without leaving your home</p>
            </ContainerBanner>
       );
}
 
export default Banner;