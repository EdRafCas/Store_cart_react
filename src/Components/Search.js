import React,{useState} from 'react';
import styled from 'styled-components';
import {useParams} from  'react-router-dom';
import { ProductList } from '../Elements/ProductList';
import {RedirectButtom,
      Separator,
      DirectionProduct,
      FilterRoute} from '../Elements/ElementsProductList';
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
      grid-template-columns: 1fr 4fr;
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
      width:100%;
      height:300px;
      border: 1px solid rgba(27, 27, 27, 0.3);
      text-align:center;
      font-size:13px;
      padding: 5px 10px;  
      text-transform:uppercase;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
`

const CurrentSearch =styled.div`
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

`
const CategoriesContainer=styled.button`
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
                  font-size: 16px;
                  font-weight: 800;
            }   
      }
`



const Search = (props) => {
      const {search} =useParams();
      let filteredSearchCriteria= ProductList.filter(function(items) {
            return items.category.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                   items.category.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                   items.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                   items.nametag.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
      });
      
      const [filterCriteria, modifyFilterCriteria] = useState(filteredSearchCriteria);

      const handleClick = (e) =>{
            if(e.target.name ==="pants"){
                  modifyFilterCriteria(filteredSearchCriteriaPants)
            }
      }
            

      let filteredSearchCriteriaPants= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Pants'.toLocaleLowerCase())
            
      });
      console.log(filteredSearchCriteriaPants)

      let filteredSearchCriteriaShirts= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Shirts'.toLocaleLowerCase())
      });
      console.log(filteredSearchCriteriaShirts)

      let filteredSearchCriteriaOutfits= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Outfits'.toLocaleLowerCase())
      });
      console.log(filteredSearchCriteriaOutfits)

      let filteredSearchCriteriaHeadwear= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Headwear'.toLocaleLowerCase())
      });
      console.log(filteredSearchCriteriaHeadwear)
      let filteredSearchCriteriaSweater= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Sweater'.toLocaleLowerCase())
      });
      console.log(filteredSearchCriteriaSweater)
      let filteredSearchCriteriaAccesories= filteredSearchCriteria.filter(function(items) {
            return items.category.toLocaleLowerCase().includes('Accesories'.toLocaleLowerCase())
      });
      console.log(filteredSearchCriteriaAccesories)

      

      return ( 
            <ColectionContainer>
                  <HeadBarContainer>
                        <DirectionProduct>
                              <RedirectButtom to="/">Main</RedirectButtom>
                              <Separator>/</Separator>
                              <RedirectButtom to="/Colection">Colection</RedirectButtom>
                              <Separator>/</Separator>
                              <RedirectButtom to="#">{search}</RedirectButtom>
                        </DirectionProduct>
                        <OrderByContainer>
                              
                        </OrderByContainer>      
                  </HeadBarContainer>
                  
                  <ImagesContainer>
                              <FilterBar>
                                    <CurrentSearch>
                                          {search}
                                    </CurrentSearch>
                                    <SearchFilters>
                                    {filteredSearchCriteriaPants.length>0 ?
                                          <CategoriesContainer name="pants" onClick={handleClick}>PANTS </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaShirts.length>0 ?
                                          <CategoriesContainer>SHIRTS </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaOutfits.length>0 ?
                                          <CategoriesContainer>OUTFITS </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaHeadwear.length>0 ?
                                          <CategoriesContainer>HEADWEAR </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaSweater.length>0 ?
                                          <CategoriesContainer>SWEATERS </CategoriesContainer>
                                    :""}
                                    {filteredSearchCriteriaAccesories.length>0 ?
                                          <CategoriesContainer>ACCESORIES </CategoriesContainer>
                                    :""}

                                    </SearchFilters>

                            {/*   <FilterRoute to="/">{search}</FilterRoute> */}
                                    
                              </FilterBar>
                              <GalleryContainer>
                                    {filterCriteria.map((products, index)=>{
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
                                    })} 
                              </GalleryContainer>                          
                  </ImagesContainer>
            </ColectionContainer>
            
            

       );
}
 
export default Search;