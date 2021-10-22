import styled from "styled-components";
import {RedirectButtom,
      Separator,
      DirectionProduct} from '../Elements/ElementsProductList';

const ContainerContact= styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items:start;
`
const HeadBarContainer = styled.div`
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      margin:0px;
      padding:0px;
`
const ContainerColumns =styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items:center;
`
const AddressContainer =styled.div`

`

const ContactForm = styled.div`
      display:flex;
      flex-direction:column;
`

const InputBox =styled.input`
      border:2px grey;
`

const Formulary = styled.form` 
      width:90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
        width: 100%;
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;

const Input = styled.input`

    font-size: 12px;
    text-transform: uppercase;
    border: none;
    border-bottom: 2px solid gray;
    outline: none;
 
    @media(max-width: 60rem){
        
    }
`;
const Contact = () => {
      return ( 
            <ContainerContact>
                  <HeadBarContainer>
                        <DirectionProduct>
                              <RedirectButtom to="/">Main</RedirectButtom>
                              <Separator>/</Separator>
                              <RedirectButtom to="/Contact">Contact</RedirectButtom>
                              <Separator>/</Separator>
                        </DirectionProduct>   
                  </HeadBarContainer>
                  <ContainerColumns>
                        <AddressContainer>
                              <div>h1</div>
                        </AddressContainer>
                        
                              <Formulary>
                                    <label>Nombre</label>
                                    <Input
                                          type="text"
                                          name="name"
                                          id="name"
                                          placeholder=""
                                    />
                                    <label>Correo</label>
                                    <Input
                                          type="text"
                                          name="name"
                                          id="name"
                                          placeholder=""
                                    />
                              </Formulary>
                        
                  </ContainerColumns>
                  
            </ContainerContact>
            
           
       );
}
 
export default Contact;