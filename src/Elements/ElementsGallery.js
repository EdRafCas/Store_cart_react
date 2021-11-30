import styled from 'styled-components';
import {Link} from "react-router-dom";

const GalleryContainer = styled.div`
      margin-top:20px;
      width: 100%;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);

      @media(max-width: 720px){ 
      width:95%;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
           
    }

      /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
`

const ProductContainer = styled.div`
      font-family: "Montserrat", Sans-serif;
`
const ContainerImage = styled.a`
`
const LinkName =styled(Link)`
      margin:5px;
      display:block;
      text-align:center;
      font-size:12px;
      cursor: pointer;
      text-transform: uppercase;
      text-decoration:none;
      color: #000;
`
const PaymentsContainer = styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

`
const CashPriceContainer =styled.div`
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      font-size:16px;
`
const PreviousPrice =styled.span`
      margin-right:5px;
      padding:0 5px;
      text-decoration:line-through;
`
const CurrentPrice =styled.span`
      text-transform: uppercase;
      font-weight:bold;
`
const CuotesPayment = styled.div`
      width:100%;
      border: 1px solid rgba(27, 27, 27, 0.3);
      text-align:center;
      font-size:13px;
      padding: 5px 10px;
      margin-bottom: 5px;   
`
export {GalleryContainer,ProductContainer,ContainerImage,LinkName,PaymentsContainer,CashPriceContainer,PreviousPrice,CurrentPrice,CuotesPayment};