import React,{useState, useContext} from 'react';
import { ProductList } from '../Elements/ProductList';
import {CartIndexContext} from './../Context/ShoppingCartContext'
import styled from 'styled-components';
import {useParams} from  'react-router-dom';
import {RedirectButtom,
      Separator,
      DirectionProduct} from '../Elements/ElementsProductList';
import {GalleryContainer,
      ProductContainer,
      ContainerImage,
      LinkName,
      PaymentsContainer,
      CashPriceContainer,
      PreviousPrice,
      CurrentPrice,
      CuotesPayment} from '../Elements/ElementsGallery';


const ImagesContainer = styled.div`
      width: 100%;
      display: grid;
      gap:20px;
      grid-template-columns: 2fr 6fr;
      `
const FilterBar =styled.div`
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      align-items:flex-start;
      gap:100px;
      
`

const ColectionContainer =styled.div`
      width: 100%;
      display: flex;
      flex-direction:column;
`
const HeadBarContainer = styled.div`
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      margin:0px;
      padding:0px;
`
const OrderByContainer =styled.div`
      width: 100%;
      padding:0px;
      display: flex;
      flex-direction:row;
      justify-content:flex-end; 
      align-items:center;
      p{
            margin:0;
            }
`

const SearchFilters = styled.div`
      box-sizing:border-box;
      width:100%;
      min-width:100%;
      max-width:100%;
      height:300px;
      border: 1px solid rgba(27, 27, 27, 0.3);
      text-align:center;
      font-size:13px;
      padding: 5px 10px;  
      text-transform:uppercase;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:20px;
`

const CurrentSearch =styled.button`
      box-sizing:border-box;
      width:auto;
      margin-top:5px;
      border: 1px solid rgba(27, 27, 27, 0.3);
      border-radius:10%;
      text-align:center;
      font-weight:800;
      font-size:18px;
      padding: 5px 10px;  
      text-transform:uppercase;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      :hover{
            color:#fff;
            background:#000000;
            
            :active{
                  border: 3px double #fff;
                  font-size: 18px;
                  font-weight: 800;
            }   
      }
`
const CategoriesContainer=styled.button`
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
      :hover{
            color:#fff;
            background:#000000;
            
            :active{
                  border: 3px double #fff;
                  font-size: 16px;
                  font-weight: 800;
            }   
      }
`



const Search = (props) => {
      const {search} =useParams();
      const {inputSearch} =useContext(CartIndexContext);
      const {filterCriteria} =useContext(CartIndexContext);
      const {modifyFilterCriteria} =useContext(CartIndexContext);
      const {filterCriteriaInner} =useContext(CartIndexContext);
      const {modifyFilterCriteriaInner} =useContext(CartIndexContext);
      const {filteredSearchCriteria} =useContext(CartIndexContext);
      
      /* const filteredSearchCriteria= ProductList.filter(function(items) {
            return items.category.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                  items.category.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                  items.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                  items.nametag.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
            }); */
      
      /* const handleQuery = () =>{
      } */
     

      /* const [filterCriteria, modifyFilterCriteria] = useState("");
      const [filterCriteriaInner, modifyFilterCriteriaInner] = useState(""); */


      const handleClick = (e) =>{
            if(e.target.name ==="pants"){
                  modifyFilterCriteria(filteredSearchCriteriaPants)
            }
            if(e.target.name ==="shirts"){
                  modifyFilterCriteria(filteredSearchCriteriaShirts)
            }
            if(e.target.name ==="outfits"){
                  modifyFilterCriteria(filteredSearchCriteriaOutfits)
            }
            if(e.target.name ==="sweaters"){
                  modifyFilterCriteria(filteredSearchCriteriaSweaters)
            }
            if(e.target.name ==="headwear"){
                  modifyFilterCriteria(filteredSearchCriteriaHeadwear)
            }
            if(e.target.name ==="accesories"){
                  modifyFilterCriteria(filteredSearchCriteriaPants)
            }
            if(e.target.name ==="restore search"){
                  modifyFilterCriteria(filteredSearchCriteria)
            }
            console.log(filteredSearchCriteria, filterCriteriaInner)
            
      }
            

      let filteredSearchCriteriaPants= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Pants'.toLocaleLowerCase())   
      });
      let filteredSearchCriteriaShirts= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Shirts'.toLocaleLowerCase())
      });
      let filteredSearchCriteriaOutfits= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Outfits'.toLocaleLowerCase())
      });
      let filteredSearchCriteriaHeadwear= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Headwear'.toLocaleLowerCase())
      });
      let filteredSearchCriteriaSweaters= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Sweaters'.toLocaleLowerCase())
      });
      let filteredSearchCriteriaAccesories= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Accesories'.toLocaleLowerCase())
      });

      

      return ( 
            <ColectionContainer>
                  <HeadBarContainer>
                        <DirectionProduct>
                              <RedirectButtom to="/">Main</RedirectButtom>
                              <Separator>/</Separator>
                              <RedirectButtom to="/Colection">Colection</RedirectButtom>
                              <Separator>/</Separator>
                              <RedirectButtom to="#">{inputSearch}</RedirectButtom>
                        </DirectionProduct>
                        <OrderByContainer>
                              
                        </OrderByContainer>      
                  </HeadBarContainer>
                  
                  <ImagesContainer>
                              <FilterBar>
                                    
                                    <CurrentSearch name="restore search" onClick={handleClick}>{inputSearch}</CurrentSearch>
                                    
                                    <SearchFilters>
                                    {filteredSearchCriteriaPants.length>0 ?
                                          <CategoriesContainer name="pants" onClick={handleClick}>PANTS </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaShirts.length>0 ?
                                          <CategoriesContainer name="shirts" onClick={handleClick}>SHIRTS </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaOutfits.length>0 ?
                                          <CategoriesContainer name="outfits" onClick={handleClick}>OUTFITS </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaHeadwear.length>0 ?
                                          <CategoriesContainer name="headwear" onClick={handleClick}>HEADWEAR </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaSweaters.length>0 ?
                                          <CategoriesContainer name="sweaters" onClick={handleClick}>SWEATERS</CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaAccesories.length>0 ?
                                          <CategoriesContainer name="accesories" onClick={handleClick}>ACCESORIES </CategoriesContainer>
                                    :""}

                                    </SearchFilters>

                            {/*   <FilterRoute to="/">{search}</FilterRoute> */}
                                    
                              </FilterBar>
                              <GalleryContainer>
                                    {filteredSearchCriteria.map((products, index)=>{
                                          let sharePrice = ((products.price*1.1)/6).toFixed(2)
                                          return(
                                                      <ProductContainer key={index}>
                                                            <ContainerImage>
                                                                  <img src={products.src} alt={products.alt} width="100%" height="auto" />      
                                                            </ContainerImage>
                                                            <LinkName to={`/Colection/${products.category}/${products.nametag}`}>
                                                                  {products.name}
                                                            </LinkName>
                                                            <PaymentsContainer>
                                                                  <CashPriceContainer>
                                                                  {products.oldPrice ?
                                                                  <PreviousPrice> {products.oldPrice} </PreviousPrice>
                                                                  :""}
                                                                  <CurrentPrice>${products.price}</CurrentPrice>
                                                                  </CashPriceContainer>
                                                                  <CuotesPayment>
                                                                        <p> <b>6</b> payments of <b>${sharePrice}</b>  with no interest</p>
                                                                  </CuotesPayment>
                                                            </PaymentsContainer>
                                                      </ProductContainer>
                                                )
                                          })
                                    }
                              </GalleryContainer>                          
                  </ImagesContainer>
            </ColectionContainer>
            
            

       );
}
 
export default Search;