import React from 'react';
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
                              <LoginBarButtomcart to="/"># </LoginBarButtomcart>
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

