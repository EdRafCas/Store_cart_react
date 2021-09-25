import React from 'react';
import styled from 'styled-components';
import Product1 from './../img/product-1.jpg'
import Product2 from './../img/product-2.jpg'
import Product3 from './../img/product-3.jpeg'
import Product4 from './../img/product-4.jpg'

const CollectionContainer = styled.div`
      width: 90%;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);

      /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
`
const ProductCollection = [
      { id: 1,
        src: Product1,
        name: "Red Cargo Pants",
        alt:"Red cargo pants"
      },
      { id: 2,
        src: Product2,
        name: "Red Cargo Pants",
        alt:"Red cargo pants"
      },
      { id: 3,
        src: Product3,
        name: "Red Cargo Pants",
        alt:"Red cargo pants"
      },
      { id: 4,
        src: Product4,
        name: "Red Cargo Pants",
        alt:"Red cargo pants"
      },
      
      
    ];
const ProductContainer = styled.div`

`

const Colection = () => {
      return ( 
            <CollectionContainer>
                  {ProductCollection.map((products, index)=>{
                        return(
                              <ProductContainer key={index}>
                                    <img src={products.src} alt={products.altText} width="100%" height="auto" />
                                    <h1>{products.name}</h1>
                              </ProductContainer>
                        )
                  })}
            </CollectionContainer>
       );
}
 
export default Colection;