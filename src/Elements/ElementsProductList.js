import styled from 'styled-components';
import {Link} from "react-router-dom";

const RedirectButtom =styled(Link)`
      font-size:16px;
      display:inline-block;
      width:auto;
      padding:15px 0px 15px 0px;
      text-decoration:none;
      color:#000;

      &:hover{
            text-decoration:underline;
            color:#000;
      }
`


const FilterRoute =styled(Link)`
      /* font-weight:bold;
      font-size:16px;
      display:inline-block;
      width:auto;
      padding:10px 0px 10px 0px;
      text-decoration:none;
      text-transform:uppercase;
      color:#000;

      &:hover{
            text-decoration:underline;
            color:#000;
      } */
      width:auto;
      margin-top:5px;
      border: 2px solid rgba(27, 27, 27, 0.3);
      border-radius:10%;
      text-align:center;
      font-weight:800;
      font-size:14px;
      padding: 5px 10px;  
      text-transform:uppercase;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      text-decoration:none;
      color:#000;
      :hover{
            color:#fff;
            background:#000000;
            
            :active{
                  border: 2px double #fff;
                  font-size: 14px;
                  font-weight: 800;
            }   
      }
`
const Separator =styled.span`
      display:inline-block;
      margin: 0px 5px;
`
const DirectionProduct=styled.div`
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      align-items:center;
`
 
export {RedirectButtom,Separator,DirectionProduct,FilterRoute} ;