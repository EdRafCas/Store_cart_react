import React from 'react';
import styled from 'styled-components';
import Logo from './../img/logo-frontpage.png';

const ContainerHeader = styled.div`
    width: 100%;
    padding: 0; /* 40px */
    display: flex;
    flex-direction:column;
    border: 2px solid black;
    flex-grow:1;
    position:absolute;
    top:0px;
    
`;

const NavBar = styled.div`
      width:100%;
      background:black;
      margin:auto;
      display:flex;
      justify-content: center;
      h1 {
            font-size:1.5rem;
            display:inline-block;
            color:white;
            width:auto;
            margin: 0.25rem 0.5rem;
          
    }
`
const UpHeader = styled.div`
      width:100%;
      margin:auto;
      display:flex;
      justify-content: space-between;
      height:auto;
      display:grid;
      align-items:center;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
`
const MainLogo = styled.img`
      width:13.375rem;
      margin: 1rem 0;

`
const LoginBar = styled.div`
      width:auto;
      height:auto;
      text-align:right;
`
const SearchBox =styled.div`
      width:auto;
      height:auto;
      display:block;
      flex-direction:row;
      align-content:flex-end;
      min-height:20px;
      float:left;
`


const Header = () => {
      return ( 
            <ContainerHeader>
                  <UpHeader>
                        <SearchBox>
                             <h1>Buscar</h1>
                        </SearchBox> 
                        <MainLogo src={Logo} />
                        <LoginBar>
                              <a href="/#">Crear cuenta </a>
                              <a href="/#">Iniciar sesion </a>
                              <a href="/#"># </a>
                              
                        </LoginBar>  
                  </UpHeader>
                  
                  <NavBar>
                        <h1>MAIN</h1>
                        <h1>COLECTION</h1>
                        <h1>CONTACT</h1>
                        <h1>INFO</h1>
                  </NavBar>
            </ContainerHeader>
            
       );
}
 
export default Header;

