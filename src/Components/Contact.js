import React,{useState} from 'react';
import styled from "styled-components";
import {ReactComponent as LogoPhone} from "../img/phone-icon.svg";
import {ReactComponent as LogoEmail} from "../img/email-icon.svg";
import {ReactComponent as LogoAddress} from "../img/address-icon.svg";
import SocialNetworkBar from '../Components/SocialNetworkBar'

const ContainerContact= styled.div`
      width:100%;
      gap:50px;
      display:flex;
      flex-direction:column;
      gap:auto;
      justify-content:space-between;
      @media(max-width: 720px){
            width:95%;
        
    }
`
const ContainerColumns =styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 3fr 2fr);
      justify-items:center;
      margin:30px 0px;
      @media(max-width: 720px){
            grid-template-columns: repeat(1,1fr);
        
    }
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

`

const Label=styled.label`
      text-transform:uppercase;
      font-weight:800;
      font-size:16px;
      @media(max-width: 720px){
            text-align:center;
        
    }
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
      @media(max-width: 720px){
            text-align:center;
        
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
                  <SocialNetworkBar/>
                  
            </ContainerContact>
            
           
       );
}
 
export default Contact;