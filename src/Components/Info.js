import React from 'react';
import styled from 'styled-components';

const InfoContainer= styled.div`
      margin-top:100px;
      width:50%;
      
      justify-content:center;
      text-align: center;
      font-family:inherits;
      p{
            font-size:30px;
      }
     a{
      text-decoration:none;
      color:blue;
      font-size:30px;
      :hover{
            text-decoration:underline

      }
      }

`
const Info = () => {
      return ( 
            <InfoContainer>
                  <p>This page was designed using React by <a href="https://github.com/EdRafCas">EdRafCas</a> as Portfolio practice </p>
            </InfoContainer>
            
       );
}
 
export default Info;