
import styled from "styled-components";

const CartShopContainer= styled.div`
      width:100%;
      height: auto;
      display:flex;
      flex-direction:column;
      font-family:"Montserrat", Sans-serif;
      padding:5px;
`
const Headline=styled.div`
      display:flex;
      flex-direction:row;
      width:100%;
      justify-content:space-between;

      p{
            font-size:14px;
            font-weight:normal;
            text-transform:uppercase;
      }

`
const Title = styled.h4`
      display:block;
      font-family: inherit;
      font-weight: 700;
      line-height: 20px;
      font-size:20px;
      text-align:left;
      text-transform:uppercase;
`
const ProductsInCart=styled.div`
      display:flex;
      flex-direction:column;
`

const CartProductContainer =styled.div`
      display: grid;
      gap:20px;
      grid-template-columns: 4fr 1fr;


`

const LeftColumn=styled.div`
      display: grid;
      gap:20px;
      grid-template-columns: 1fr 2fr;
`
const RightColumn=styled.div`
      display: grid;
      gap:20px;
      grid-template-columns: 2fr 1fr;;
`
const ImageContainer=styled.div`

      `

const DescriptionContainer = styled.div`
      display:flex;
      flex-direction:column;


`

const ProductName=styled.div`

      a{

      }
`
const ProductPrice=styled.div`

`
const ProductCuantity=styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
gap:10px;


`
const ReduceButton =styled.div`

`
const AmountToBuy=styled.div`

`

const IncreaseButton=styled.div`

`
const SubtotalPrice=styled.div`
`

const RemovefromCart=styled.div`
`


const Cart = () => {
      return ( 
            <CartShopContainer>
                  <Title>Cart</Title>
                  <Headline>
                        <p>product</p>
                        <p>Subtotal</p>
                  </Headline>
                  <ProductsInCart>
                        <CartProductContainer>
                              <LeftColumn>
                                    <ImageContainer>
                                    IMAGEN
                                    </ImageContainer>
                                    <DescriptionContainer>
                                          <ProductName>Hello</ProductName>
                                          <ProductPrice>5200</ProductPrice>
                                          <ProductCuantity>
                                                <ReduceButton>-</ReduceButton>
                                                <AmountToBuy>1</AmountToBuy>
                                                <IncreaseButton>+</IncreaseButton>
                                          </ProductCuantity>
                                    </DescriptionContainer>
                              </LeftColumn>
                              <RightColumn>
                                    <SubtotalPrice>5200</SubtotalPrice>
                                    <RemovefromCart>x</RemovefromCart>
                              </RightColumn>
                              
                              
                              
                        </CartProductContainer>
                  </ProductsInCart>
            </CartShopContainer>
       );
}
 
export default Cart;