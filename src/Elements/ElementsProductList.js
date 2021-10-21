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
      font-weight:bold;
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