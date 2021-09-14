import React from 'react';
import styled from 'styled-components';
import Logo from './../img/logo-frontpage.png';

const ContainerHeader = styled.div`
    width: 100%;
    padding: 0; /* 40px */
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    border: 2px solid black;
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
`
const MainLogo = styled.img`
      width:13.375rem;
      margin: 1rem 0;

`


const Header = () => {
      return ( 
            <ContainerHeader>
                  <UpHeader>
                        <div>Hola1</div>
                        <MainLogo src={Logo} />
                        <div>Hola3</div>  
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

