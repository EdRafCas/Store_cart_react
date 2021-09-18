import styled from 'styled-components';
import {Link} from "react-router-dom";

const ContainerHeader = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction:column;
    border: 0px ;
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
      a{    
            text-decoration:none;
      }
      
`
const NavBarButtom =styled(Link)`
      border-bottom: 1px solid #FFFFFF;
      font-size:12px;
      display:inline-block;
      color:white;
      width:auto;
      padding:10px;
      margin: 0.25rem 0.5rem;
      letter-spacing:1px;
`

const UpHeader = styled.div`
      width:100%;
      margin:auto;
      display:flex;
      justify-content: space-between;
      height:200px;
      display:grid;
      align-items:center;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
`
const MainLogo = styled.img`
      justify-self:center;
      height:170px;
      width:auto;
      margin: 15px 0;

`
const LoginBar = styled.div`
      width:auto;
      height:auto;
      text-align:right;
      a{    
            font-size:10px;
            text-decoration:none;
      }
`
const LoginBarButtomLeft =styled(Link)`
      display:inline-block;
      color:#000000;
      width:auto;
      padding:0px 5px 0px 0px;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
`
const LoginBarButtomRight =styled(Link)`
      display:inline-block;
      color:#000000;
      width:auto;
      padding:0px 0px 0px 5px;
`
const LoginBarButtomcart =styled.a`
      display:inline-block;
      color:#000000;
      width:48.25px; /* placeholder */
      margin:5px 0px;
      padding: 4px 8px;
      
`
const CartSpan = styled.span`
      font-size:10px;
      color:#FFFFFF;
      padding:1px 3px;
      background-color: #000000;
      border-radius:50%;
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


export {ContainerHeader, NavBar, NavBarButtom, UpHeader, MainLogo, LoginBar, LoginBarButtomLeft, LoginBarButtomRight, LoginBarButtomcart, CartSpan, SearchBox} ;