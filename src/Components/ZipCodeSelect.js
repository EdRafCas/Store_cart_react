import React,{useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as IconDown} from './../img/arrowdown-icon.svg'



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
const TitleShipping =styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 1fr 1fr);
      gap:20px;
`
const ZipCodeSelect = () => {

const [shownSelect, changeShownSelect] =useState(false);
const [currentZipcode, changeZipcode] = useState('2000');
const [shippingMethod, changeshippingMethod] = useState(true);

const handleClick = (e) =>{
      changeZipcode(e.currentTarget.dataset.value)
}
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
            <TitleShipping>
                  {shippingMethod ===true ?
                  <>
                  <ContainerSelect onClick={()=>{changeShownSelect(!shownSelect)}}>
                        <SelectedZipcode>{currentZipcode}<IconDown/></SelectedZipcode>
                        
                        {shownSelect &&
                              <Options>
                                    {zipcodes.map((zipcode) =>{
                                          return <Option
                                                key={zipcode.id}
                                                data-value={zipcode.value}
                                                onClick={handleClick}
                                                >
                                                {zipcode.value}
                                                </Option>
                                    })}
                              </Options>
                        }
                  </ContainerSelect>
                  <CalculateShipping onClick={()=>changeshippingMethod(!shippingMethod)}>Calculate</CalculateShipping>
                  </>
                  :shippingMethod ===false ?
                  <CalculateShipping onClick={()=>changeshippingMethod(!shippingMethod)}>Calculate</CalculateShipping>
                  :""}
                  
            </TitleShipping>

       );
}
 
export default ZipCodeSelect;