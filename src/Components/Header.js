import React from 'react';
import styled from 'styled-components';
import Logo from './../img/logo-frontpage.png';
import {
      ContainerHeader,
      NavBar,
      NavBarButtom,
      UpHeader,
      MainLogo,
      LoginBar,
      LoginBarButtomLeft,
      LoginBarButtomRight,
      LoginBarButtomcart,
      CartSpan,
      SearchBox} from './../Elements/ElementsHeader';
      import CartIcon from './../img/shop-cart.png'

const ImageContainer=styled.div`

      display:flex;
      justify-content:flex-end;
      padding:2px;
      img{
            width:50%;
            height:auto;
      }
      `



const Header = () => {
      return ( 
            <ContainerHeader>
                  <UpHeader>
                        <SearchBox>
                             <form>
                                   <input placeholder="SEARCH"></input     >
                                   <buttom>click</buttom>
                             </form>
                        </SearchBox> 
                        <MainLogo src={Logo} />
                        <LoginBar>
                              <LoginBarButtomLeft to="/">CREATE ACCOUNT </LoginBarButtomLeft>
                              <LoginBarButtomRight to="/">LOG IN </LoginBarButtomRight>
                              <LoginBarButtomcart to="/Cart">
                                          <ImageContainer>
                                                <img src={CartIcon} alt="Icono" />   
                                          </ImageContainer>
                              </LoginBarButtomcart>
                              <CartSpan>0</CartSpan>
                              
                        </LoginBar>  
                  </UpHeader>
                  
                  <NavBar>
                        <NavBarButtom to="/">MAIN</NavBarButtom>
                        <NavBarButtom to="/Colection">COLECTION </NavBarButtom>
                        <NavBarButtom to="/Contact">CONTACT</NavBarButtom>
                        <NavBarButtom to="/Info">INFO</NavBarButtom>
                  </NavBar>
            </ContainerHeader>
            
       );
}
 
export default Header;

