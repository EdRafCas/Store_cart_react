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
    border: 2px solid gray;
    outline: none;
    height: ${(props) => props.name==="message" ? "150px"
                        : props.name==="email" ? "50px"    
                        : props.name==="name" ? "50px"    
                        :"auto"};
     text-align: justify;
      white-space:nowrap;
      overflow:scroll;


    @media(max-width: 60rem){
        
    }
`;
const TextArea =styled.textarea`
      font-size: 12px;
      text-transform: uppercase;
      border: none;
      border: 2px solid gray;
      outline: none;
      height: ${(props) => props.name==="email" ? "50px"    
                        : props.name==="name" ? "50px"    
                        :"auto"};
      text-align: justify;
      white-space:normal;
      overflow:scroll;


    @media(max-width: 60rem){
        
    }
`

const Label=styled.label`
      text-transform:uppercase;
      font-weight:800;
      font-size:16px;
`


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
                                    <Label>Name</Label>
                                    <Input
                                          type="text"
                                          name="name"
                                          id="name"
                                          placeholder=""
                                    />
                                    <Label>Email</Label>
                                    <Input
                                          type="text"
                                          name="name"
                                          id="name"
                                          placeholder=""
                                    />
                                    <Label>Message</Label>
                                    <TextArea message
                                          cols="30"
                                          rows="40"
                                          type="text"
                                          name="message"
                                          id="message"
                                          placeholder="Leave us your message here"
                                    />
                              </Formulary>
                        
                  </ContainerColumns>
                  
            </ContainerContact>
            
           
       );
}
 
export default Contact;