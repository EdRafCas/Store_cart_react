import React from 'react';
import styled from 'styled-components';
import {ReactComponent as LogoInstagram} from "../img/instagram-icon.svg";
import {ReactComponent as LogoFacebook} from "../img/facebook-icon.svg";

const IconInstagram = styled(LogoInstagram)`
      width:50px;
      min-height:50px;
      color:#fff;
      fill:#fff;
      margin:5px;
`
const IconFacebook= styled(LogoFacebook)`
      width:50px;
      min-height:50px;
      color:#fff;
      fill:#fff;
      margin:5px;
`
const ContainerIconSocial = styled.a`
      height:20px;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      width:auto;
`
const SocialNetworks = styled.div`
      box-sizing:border-box;
      width:100%;
      display:flex;
      flex-direction:row;
      justify-content:center;
      padding:20px;
      background:#000;
      color:#fff;
      height:auto;
      
      a{
            height:70px;
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            width:auto;
            border: 4px solid white;
            margin:10px;
            :hover{
            border: 4px solid #000;
            svg{
                  pointer-events:none;
            }
            }

      }

`

const SocialNetworkBar = () => {
      return ( 
            <SocialNetworks>
                              <ContainerIconSocial href ="https://www.instagram.com/"><IconInstagram viewBox="0 0 448 512"/></ContainerIconSocial>
                              <ContainerIconSocial href ="https://www.facebook.com/"><IconFacebook viewBox="0 0 320 512"/></ContainerIconSocial>
                              
            </SocialNetworks>
       );
}
 
export default SocialNetworkBar;