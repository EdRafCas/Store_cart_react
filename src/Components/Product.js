import {useParams, Link} from  'react-router-dom';
import styled from 'styled-components';
import GalleryProducts from './../Elements/ProductList';
import Product1 from './../img/product-1.jpg';

const ContainerProductPage=styled.div`
      display:flex;
      width:100%;
      flex-direction:column;
      padding-top:5px;

`
const DirectionProduct=styled.div`
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      align-items:center;
`
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
const Separator =styled.span`
      display:inline-block;
      margin: 0px 5px;
`

const InnerContainer=styled.div`
      width:100%;
      display: grid;
      gap:00px;
      grid-template-columns: repeat(2, 1fr);

`
const ProductDisplay=styled.div`
      width:100%;
      display: grid;
      gap:10px;
      grid-template-columns: 1fr 4fr;
      grid-template-rows: 1fr 1fr;
`
const SmallPhotos=styled.div`
      width: 100%;
      display: grid;
      gap:10px;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      img{
            width:100%;
            height:auto;
            min-width:95px;
      }
`

const BigPhoto=styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      img{
            width:100%;
            height:auto;
            max-width:100%;
            min-width:300px;
      }

`
const ShoppingOrder=styled.div` 
      width:100%;
      display:flex;
      flex-direction:column;
`

const ProductName =styled.h1`
      margin:5px;
      display:block;
      text-align:left;
      font-size:24px;
      cursor: pointer;
      text-transform: uppercase;
      text-decoration:none;
      color: #000;

`
const CashPriceContainer =styled.div` 
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      font-size:16px;
      align-items:center;
`
const PreviousPrice =styled.span` 
      margin-right:5px;
      margin-bottom:0px;
      padding:0 5px;
      text-decoration:line-through;
      font-size:20px;
      opacity:0.8;
`
const CurrentPrice =styled.span` 
      text-transform: uppercase;
      font-weight:bold;
      font-size:32px;
      line-height:30px;
      background:#000;
      color:#fff;
`

 /*  {GalleryProducts[id-1] ?
                  <div>
                        <h1>{GalleryProducts[id-1].name}</h1>
                        <h1>{GalleryProducts[id-1].price}</h1>
                  </div>
                  :
                  ""
                  } */
                  
const Product = (props) => {
      const {id} =useParams();
      

      return ( 
            <ContainerProductPage>
                  <DirectionProduct>
                        <RedirectButtom to="/"> Main</RedirectButtom> 
                        <Separator>/</Separator> 
                        <RedirectButtom>Colection</RedirectButtom>
                        <Separator>/</Separator> 
                  </DirectionProduct>
                  <InnerContainer>
                        <ProductDisplay>
                              <SmallPhotos>
                                    <img alt="" src={Product1}></img>
                                    <img alt="" src={Product1}></img>
                                    <img alt="" src={Product1}></img>
                                    
                                    
                              </SmallPhotos>
                              <BigPhoto>
                                    <img src={Product1}></img>
                              </BigPhoto>
                        </ProductDisplay>
                        <ShoppingOrder>
                              <ProductName>Producto</ProductName>
                              <CashPriceContainer>
                                    <PreviousPrice>$1500,00</PreviousPrice>
                                    <CurrentPrice>$2500,00</CurrentPrice>
                              </CashPriceContainer>
                        </ShoppingOrder>
                  </InnerContainer>


            </ContainerProductPage>
                
           
       );
}
 
export default Product;