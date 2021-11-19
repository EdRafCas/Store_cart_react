import React,{useContext} from 'react';
import {CartIndexContext} from './../Context/ShoppingCartContext'
import styled from 'styled-components';

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
      border-top:1px solid rgba(27, 27, 27, 0.3);
      padding:20px 0px;  
      margin: 0px 5px;
      
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


const SearchFilters = styled.div`
      box-sizing:border-box;
      width:100%;
      min-width:100%;
      max-width:100%;
      height:300px;
      border: none;
      text-align:center;
      font-size:13px;
      padding: 0px; 
      text-transform:uppercase;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:20px;
      border-top:1px solid rgba(27, 27, 27, 0.3);
      margin: 5px 0px;
      padding:20px 0px;
`

const CurrentSearch =styled.button`
      box-sizing:border-box;
      width:auto;
      margin-top:5px;
      border: 2px solid rgba(27, 27, 27, 0.3);
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
                  border: 2px double #fff;
                  font-size: 18px;
                  font-weight: 800;;
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
                  border: 2px double #fff;
                  font-size: 14px;
                  font-weight: 800;
            }   
      }
`
const EmptySearch=styled.div`
      display:block;
      grid-column: span 4;
      box-sizing: border-box;
      padding: 5px 0;
      text-align: center;
      background: none;
      font-size: 18px;
      border: 0;
      border-radius: 0;
      text-transform: uppercase;
      text-shadow: none;
      color: #c09853;
      margin-bottom: 20px;
`


const Search = (props) => {
      
      const {inputSearch} =useContext(CartIndexContext);
      const {filterCriteria} =useContext(CartIndexContext);
      const {modifyFilterCriteria} =useContext(CartIndexContext);

      const {filteredSearchCriteria} =useContext(CartIndexContext);
      const {filteredSearchCategory} =useContext(CartIndexContext);
      
      

      const handleClick = (e) =>{
            if(e.target.name === "pants" || "shirts" || "outfits" || "headwear" || "sweaters" || "accesories"){
                  modifyFilterCriteria(filteredSearchCriteria.filter(function(items) {
                        return items.category.toLocaleLowerCase().includes(e.target.name.toLocaleLowerCase())   
                  }))
                  console.log(filterCriteria)
            }
            if(e.target.name ==="restore search"){
                  modifyFilterCriteria(filteredSearchCriteria.filter(function(items) {
                        return items.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())   
                  }))
                  console.log(filterCriteria)
            }
            
      }
            

      let filteredSearchCriteriaPants= filteredSearchCategory.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Pants'.toLocaleLowerCase())   
      });
      let filteredSearchCriteriaShirts= filteredSearchCategory.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Shirts'.toLocaleLowerCase())
      });
      let filteredSearchCriteriaOutfits= filteredSearchCategory.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Outfits'.toLocaleLowerCase())
      });
      let filteredSearchCriteriaHeadwear= filteredSearchCategory.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Headwear'.toLocaleLowerCase())
      });
      let filteredSearchCriteriaSweaters= filteredSearchCategory.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Sweaters'.toLocaleLowerCase())
      });
      let filteredSearchCriteriaAccesories= filteredSearchCategory.filter(function(items) {
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
                              
                              <RedirectButtom to="#" value={inputSearch}>{inputSearch}</RedirectButtom>
                        </DirectionProduct>
                           
                  </HeadBarContainer>
                  
                  <ImagesContainer>
                              <FilterBar>
                                    
                                    <CurrentSearch name="restore search" onClick={handleClick}>{inputSearch? inputSearch:"SEARCH"}</CurrentSearch>
                                    
                                    <SearchFilters>
                                    {filteredSearchCriteriaPants.length>0 ?
                                          <CategoriesContainer name="pants" cloth onClick={handleClick}>PANTS </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaShirts.length>0 ?
                                          <CategoriesContainer name="shirts" cloth onClick={handleClick}>SHIRTS </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaOutfits.length>0 ?
                                          <CategoriesContainer name="outfits" cloth onClick={handleClick}>OUTFITS </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaHeadwear.length>0 ?
                                          <CategoriesContainer name="headwear" cloth onClick={handleClick}>HEADWEAR </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaSweaters.length>0 ?
                                          <CategoriesContainer name="sweaters" cloth onClick={handleClick}>SWEATERS</CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaAccesories.length>0 ?
                                          <CategoriesContainer name="accesories" cloth onClick={handleClick}>ACCESORIES </CategoriesContainer>
                                    :""}

                                    </SearchFilters>

                            {/*   <FilterRoute to="/">{search}</FilterRoute> */}
                                    
                              </FilterBar>
                              <GalleryContainer>
                                    {filterCriteria==="false" && filteredSearchCriteria.length>0?
                                    filteredSearchCriteria.map((products, index)=>{
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
                                    :
                                    filterCriteria==="false" && filteredSearchCriteria.length===0?
                                    <EmptySearch>It seems your search has no results</EmptySearch>
                                    :
                                    filterCriteria.map((products, index)=>{
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