import React,{useState} from 'react';
import styled from "styled-components";
import {RedirectButtom,
      Separator,
      DirectionProduct} from '../Elements/ElementsProductList';
import {ReactComponent as LogoPhone} from "../img/phone-icon.svg";
import {ReactComponent as LogoEmail} from "../img/email-icon.svg";
import {ReactComponent as LogoAddress} from "../img/address-icon.svg";
import {ReactComponent as LogoInstagram} from "../img/instagram-icon.svg";
import {ReactComponent as LogoFacebook} from "../img/facebook-icon.svg";

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
      grid-template-columns: repeat(1, 3fr 2fr);
      justify-items:center;
      margin:30px 0px;
`
const AddressContainer =styled.div`
      width:100%;
`

const Formulary = styled.form` 
      width:90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap:5px;
    input {
        width: 100%;
        text-align: left;
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
    border: 3px solid #000;
    outline: none;
    height: ${(props) => props.name==="message" ? "150px"
                        : props.name==="email" ? "50px"    
                        : props.name==="name" ? "50px"    
                        :"auto"};
      text-align:left;
      white-space:nowrap;
      overflow:scroll;


    @media(max-width: 60rem){
        
    }
`;
const TextArea =styled.textarea`
      font-size: 12px;
      text-transform: uppercase;
      border: none;
      border: 3px solid #000;
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
const ContactButton=styled.button`
      box-sizing: border-box;
      padding: 8px 12px;
      background-color: transparent;
      color: #000000;
      fill: #000000;
      border: 3px solid #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      transition: all 0.4s ease;
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

const ContainerMap =styled.div`
      margin:auto;
      width:100%;
      overflow:hidden;
      max-height:600px;
`

const Frame =styled.iframe`
      width:100%;
      height:400px;
`
const ContactInfoContainer =styled.div`
      display:flex;
      flex-direction:column;
      h3{
            font-size:24px;
            margin-top:20px;
            margin-bottom:10px;
            font-family:inherit;
            font-weight:500;
            line-height:1.1;
            display:block;
            text-transform:uppercase;
      }

`
const IconPhone = styled(LogoPhone)`
      width:20px;
      min-height:20px;
`
const IconEmail= styled(LogoEmail)`
      width:20px;
      min-height:20px;
`
const IconAddress = styled(LogoAddress)`
      width:20px;
      min-height:20px;
`
const ContainerIcons = styled.div`
      height:20px;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      width:auto;
`
const SubContainer =styled.div`
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
`
const SocialNetworkBar = styled.div`
      box-sizing:content-box;
      width:100%;
      display:flex;
      flex-direction:row;
      justify-content:center;
      padding:5px;
      background:#000;
      color:#fff;
      height:100px;
      padding-top:20px;
      a{
            height:70px;
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            width:auto;
            border: 4px solid white;
            margin:10px;
            :hover{
            border: 4px solid #000;
            svg{
                  pointer-events:none;
            }
            }

      }

`
const IconInstagram = styled(LogoInstagram)`
      width:50px;
      min-height:50px;
      color:#fff;
      fill:#fff;
      margin:5px;
`
const IconFacebook= styled(LogoFacebook)`
      width:50px;
      min-height:50px;
      color:#fff;
      fill:#fff;
      margin:5px;
`
const ContainerIconSocial = styled.a`
      height:20px;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      width:auto;
`


const Contact = () => {
      const [inputName, changeInputName] = useState("");
      const [inputEmail, changeInputEmail] = useState("");
      const [textMessage, changeTextMessage] = useState("");

      const handleChange = (e) =>{
            if(e.target.name ==="name"){
                  changeInputName(e.target.value)
            }if(e.target.name ==="email"){
                  changeInputEmail(e.target.value)
            }if (e.target.name ==="message"){
                  changeTextMessage(e.target.value)
            }
      }
      const showValue = (e) => {
            /* e.preventDefault(); */
            console.log(inputName,inputEmail, textMessage)
      }
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
                              <ContactInfoContainer>
                                    <h3>Contact Us</h3>
                                          <SubContainer>
                                                <ContainerIcons><IconPhone viewBox="0 0 1792 1792" /></ContainerIcons><p>+54 11 XXXX XXXX</p>
                                          </SubContainer>
                                          <SubContainer>
                                                <ContainerIcons><IconEmail viewBox="0 0 1792 1792" /></ContainerIcons><p>Portfolio@email.com</p>
                                          </SubContainer>
                                          <SubContainer>
                                                <ContainerIcons><IconAddress viewBox="0 0 1792 1792" /></ContainerIcons><p>Rosario-Argentina</p>
                                          </SubContainer>
                              </ContactInfoContainer>

                              <ContainerMap>
                                    <Frame src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d836.9623409655084!2d-60.64123339797852!3d-32.95498625513741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1622504850237!5m2!1ses!2sar"></Frame>
                              </ContainerMap>
                        </AddressContainer>
                        
                              <Formulary>
                                    <Label>Name</Label>
                                    <Input
                                          type="text"
                                          name="name"
                                          id="name"
                                          placeholder="Name"
                                          value={inputName}
                                          onChange={handleChange}
                                    />
                                    <Label>Email</Label>
                                    <Input
                                          type="email"
                                          name="email"
                                          id="email"
                                          placeholder=""
                                          value={inputEmail}
                                          onChange={handleChange}
                                    />
                                    <Label>Message</Label>
                                    <TextArea message
                                          cols="30"
                                          rows="20"
                                          type="text"
                                          name="message"
                                          id="message"
                                          placeholder="Leave us your message here"
                                          value={textMessage}
                                          onChange={handleChange}
                                    />
                                    <ContactButton type="submit" onClick={showValue}>SEND</ContactButton>
                              </Formulary>
                        
                  </ContainerColumns>
                  <SocialNetworkBar>
                              <ContainerIconSocial href ="https://www.instagram.com/"><IconInstagram viewBox="0 0 448 512"/></ContainerIconSocial>
                              <ContainerIconSocial href ="https://www.facebook.com/"><IconFacebook viewBox="0 0 320 512"/></ContainerIconSocial>
                              
                  </SocialNetworkBar>
                  
            </ContainerContact>
            
           
       );
}
 
export default Contact;