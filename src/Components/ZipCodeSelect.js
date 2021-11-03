import React,{useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as LogoTruck} from "../img/truck-icon.svg";
import {ReactComponent as LogoStore} from "../img/store-icon.svg";
import {ReactComponent as IconDown} from './../img/arrowdown-icon.svg'

const FowardAddressContainer=styled.div`
      display:flex;
      flex-direction:column;
      gap:20px;
`

const IconTruck = styled(LogoTruck)`
      width:20px;
      min-height:20px;
`

const ContainerIcons = styled.div`
      height:20px;
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      width:auto;
      p{
            margin-left:15px;
            margin-bottom:0px;
            height:auto;}
`

const RetireAtLocal =styled.div`
      border-top:1px solid #000;
      padding:15px 0px;
      height:20px;
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      width:auto;
      p{
            margin-left:15px;
            margin-bottom:0px;
            height:auto;}
`

const IconStore= styled(LogoStore)`
      width:20px;
      min-height:20px;
`

const AdressContainer=styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 1fr 8fr 1fr);
      gap:5px;
      color: #000000;
      outline: 3px solid #000000;
      outline-offset: -2px;
      cursor: pointer;
      font-size: 16px;
      padding: 20px 15px;
`

const Address=styled.span`

`

const ContainerSelect = styled.div`
    background: #E8EFF1;
    cursor: pointer;
    border-radius: 10px; 
    position: relative;
    height: 60px;
    width: 100%;
    padding: 0px 20px; /* 20px */
    font-size: 16px; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: #CBDDE2};
`
const SelectedZipcode = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
          margin:0;
    }

    svg {
        width: 20px;
        height: auto;
        margin-left: 20px; 
    }
`;
const Options = styled.div`
    background: #E8EFF1;
    position: absolute;
    top: 90px; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 10px; /* 10px */
    max-height: 300px; /* 300px */
    overflow-y: auto;
`;
const Option = styled.div`
    padding: 20px; /* 20px */
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 20px; /* 20px */
    }
    &:hover {
        background: #CBDDE2;
    }
`;

const CalculateShipping =styled.button`
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
const ChangeShipping =styled.button`
      width:70%;
      align-self:center;
      box-sizing: border-box;
      padding: 8px 12px;
      background-color: transparent;
      color: #000000;
      fill: #000000;
      border: 3px solid #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      transition: all 0.4s ease;
      justify-self:center;
      
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

      
const ShippingSelect =styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 3fr 2fr);
      gap:20px;
      p{
            display:block;
            font-family: inherit;
            font-weight: 700;
            line-height: 20px;
            font-size:12px;
            text-align:left;
            margin:auto;
            text-transform:uppercase;

      }
`
const ShippingSelectTwo =styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 3fr 2fr);
      gap:20px;
      p{
            display:block;
            font-family: inherit;
            font-weight: 700;
            line-height: 20px;
            font-size:12px;
            text-align:left;
            margin:auto;
            text-transform:uppercase;

      }
`

const ZipCodeSelect = () => {

const [shownSelect, changeShownSelect] =useState(false);
const [currentZipcode, changeZipcode] = useState('2000');
const [currentZipcodeAddress, changeZipcodeAddress] = useState('Rosario');
const [shippingMethod, changeshippingMethod] = useState(true);

const handleClick = (e) =>{
      changeZipcode(e.currentTarget.dataset.value)
      changeZipcodeAddress(e.currentTarget.dataset.address)
};

const zipcodes = [
      {id:"Rosario", value:"2000"},
      {id:"Cordoba", value:"2001"},
      {id:"Rioja", value:"2002"},
      {id:"San Lorenzo", value:"2003"},
      {id:"Avillaneda", value:"2004"},
      {id:"San Juan", value:"2005"},
      {id:"Bariloche", value:"2006"},
      {id:"Santa Cruz", value:"2007"},
      {id:"Neuquen", value:"2008"},
      {id:"San Luis", value:"2009"},
      {id:"Mendoza", value:"2010"}
];


      return (
            <FowardAddressContainer>
                  <ContainerIcons><IconTruck/><p>Shipping zipcode</p></ContainerIcons>
                  {shippingMethod ===true ?
                        <ShippingSelect>
                              <ContainerSelect onClick={()=>{changeShownSelect(!shownSelect)}}>
                                    <SelectedZipcode>{currentZipcode}<IconDown/></SelectedZipcode>
                                          {shownSelect &&
                                                <Options>
                                                      {zipcodes.map((zipcode) =>{
                                                            return <Option
                                                                  key={zipcode.id}
                                                                  data-value={zipcode.value}
                                                                  data-address={zipcode.id}
                                                                  onClick={handleClick}
                                                                  >
                                                                  {zipcode.value}
                                                                  </Option>
                                                      })}
                                                </Options>
                                          }
                              </ContainerSelect>
                              <CalculateShipping onClick={()=>changeshippingMethod(!shippingMethod)}>Calculate</CalculateShipping>
                        </ShippingSelect>      
                        :shippingMethod ===false ?
                        <>
                        <ShippingSelectTwo>
                              <p>Delivery options for zipcode {currentZipcode}</p>
                              <ChangeShipping onClick={()=>changeshippingMethod(!shippingMethod)}>Change</ChangeShipping> 
                        </ShippingSelectTwo>    
                        <AdressContainer>
                              <Address>1</Address> 
                              <Address>Envio a {currentZipcodeAddress} </Address> 
                        </AdressContainer> 
                        </>
                  :""} 
                  <RetireAtLocal><IconStore/><p>Retire at our local</p></RetireAtLocal>
                  <AdressContainer>
                        <Address>1</Address> 
                        <Address>Montevideo 1180, Rosario-Santa Fé, Argentina</Address> 
                        <Address>Free</Address> 
                  </AdressContainer>                       
            </FowardAddressContainer> 
            
       );
}
 
export default ZipCodeSelect;