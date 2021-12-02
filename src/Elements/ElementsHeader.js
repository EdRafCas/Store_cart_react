import styled from 'styled-components';
import {Link} from "react-router-dom";

const ContainerHeader = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction:column;
    gap:0;
    
    justify-content:flex-start;
    margin:0px;
    
`;

const NavBar = styled.div`
      width:100%;
      
      background:black;
      margin:auto;
      display:flex;
      flex-direction:row;
      justify-content:center;
      margin:0;

      
      
      a{    
            text-decoration:none;
      }
      @media(max-width: 720px){ /* 950px */
        width: 100%;
        min-width:600px;
    }
      @media(max-width: 400px){ 
            width: 100%;
            min-width:400px;
            
      }
      
`
const NavBarButtom =styled(Link)`
      /* border-bottom: 1px solid #FFFFFF; */
      
      box-sizing: content-box;
      font-size:14px;
      display:inline-block;
      color:white;
      width:auto;
      padding:15px 5px;
      margin: 0.25rem 0.5rem;
      letter-spacing:1px;
      white-space: nowrap;
      border: 3px solid #000000;
      
      
      :hover{
            color:#000000;
            background:#fff;
            
            :active{
                  border: 3px double #000;
                  font-size: 14px;
                  font-weight: 800;
            }   
      }
      @media(max-width: 400px){ 
            font-size:12px;
            padding:10px 2px;
           
            :hover{
            color:#000000;
            background:#fff;
            
                  :active{
                        border: 3px double #000;
                        font-size: 12px;
                        font-weight: 800;
                  }   
      }
    }

     
 
`

const UpHeader = styled.div`
      width:100%;
      margin-top:0px;
      justify-content: center;
      height:200px;
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
            @media(max-width: 720px){ 
            height:100px;
            width:100%;
            grid-template-columns: repeat(2, 1fr);
            gap: 0;
            font-size:24px;
           
    }
`
const MainLogo = styled.img`
      justify-self:center;
      height:170px;
      width:auto;
      margin: 15px 0;
      @media(max-width: 720px){ 
        display:none;
           
    }
`
const LoginBar = styled.div`
      width:auto;
      height:auto;
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:flex-end;
      margin:0;
      float:right;
      a{    
            font-size:10px;
            text-decoration:none;
      }
      @media(max-width: 720px){ 
        justify-content:center;
           
    }
    

`
const LoginBarButtomLeft =styled(Link)`
      display:none;/* display:inline-block; */
      color:#000000;
      width:auto;
      padding:0px 5px 0px 0px;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      
`
const LoginBarButtomRight =styled(Link)`
      display:none;/* display:inline-block; */
      color:#000000;
      width:auto;
      padding:0px 0px 0px 5px;
`
const LoginBarButtomcart =styled(Link)`
      display:inline-block;
      color:#000000;
      width:48.25px; /* placeholder */
      margin-right:5px;
      
      
`
const CartSpan = styled.div`
      font-size:15px;
      color:#FFFFFF;
      padding:1px 3px;
      background-color: #000000;
      border-radius:50%;
      width:30px;
      align-items:center;
      text-align:center;
`

const SearchBox =styled.div`
      width:auto;
      height:auto;
      display:flex;
      flex-direction:column;
      justify-content:center;
      float:left;
      min-height:20px;
      @media(max-width: 720px){ 
        justify-content:center;
           
    }
      
`


export {ContainerHeader, NavBar, NavBarButtom, UpHeader, MainLogo, LoginBar, LoginBarButtomLeft, LoginBarButtomRight, LoginBarButtomcart, CartSpan, SearchBox} ;