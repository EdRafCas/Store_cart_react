import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {CartIndexContext} from './../Context/ShoppingCartContext'
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
import {ReactComponent as LogoSearch} from "../img/search-icon.svg";

const ImageContainer=styled.div`

      display:flex;
      justify-content:flex-end;
      padding:2px;
      img{
            width:50%;
            height:auto;
      }
`


const InputSearch = styled.input`
      font-size: 14px;
      /* text-transform: uppercase; */
      border: 3px solid #000;
      outline: none;
      height: auto;
      text-align:left;
      white-space:nowrap;
      overflow:scroll;


    @media(max-width: 60rem){
        
    }
`;

const SearchColection=styled(LogoSearch)`
      height:50%;
      width:auto;
      min-height:20px;
      svg{
            pointer-events:none;
      }
`
const ContainerIcon=styled(Link)`
      height:20px;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      width:auto;
`

const FormularySearch = styled.form` 
      width:100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap:5px;
      input {
            width: 60%;
            text-align: left;
            &::placeholder {
            color: rgba(0,0,0,.2);
            }
      }
`

const Header = (e) => {
      const {changeInputSearch} =useContext(CartIndexContext);
      const [inputHolder, changeInputHolder] = useState("")
      const {modifyFilterCriteria} =useContext(CartIndexContext);

      
      
      const handleChange = (e) =>{
            if(e.target.name ==="search"){
                  changeInputHolder(e.target.value)
                  /* console.log(inputHolder) */
            }
      }

      const searchOnClick = ()=>{
            modifyFilterCriteria("false")
            changeInputSearch(inputHolder)
      }


      return ( 
            <ContainerHeader>
                  <UpHeader>
                        <SearchBox>
                             <FormularySearch>
                                   <InputSearch 
                                          type="text"
                                          name="search"
                                          id="search"
                                          placeholder="Search"
                                          value={inputHolder}
                                          onChange={handleChange}>

                                   </InputSearch     >
                                         <ContainerIcon
                                          name="redirect"  
                                          onClick={searchOnClick}
                                          to={`/Search/:${inputHolder}`}>
                                                <SearchColection viewBox="598 -476.1 1792 1792"/>
                                          </ContainerIcon>
                             </FormularySearch>
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

