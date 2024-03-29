import React from 'react';
import styled from 'styled-components';

const ContainerWebBanner = styled.div`
      box-sizing: border-box;
      display:flex;
      flex-direction:column;
      align-items:center;
      width:100%;
      margin:0px;
      padding-bottom:100px;
      
      p{
            text-transform: uppercase;
            text-align:center;
            font-weight:700;
            color: #535353;
            margin:0;

      }
      @media(max-width: 600px){ 
        display:none;
           
    }
`

const WebBanner = () => {
      return ( 
            <ContainerWebBanner>
                  <p>Choose, pay,  and receive your order without leaving your home</p>
            </ContainerWebBanner>
       );
}
 
export default WebBanner;