import React from 'react';
import styled from 'styled-components';


const ErrorContainer= styled.div`
      margin-top:100px;
      width:50%;
      
      justify-content:center;
      text-align: center;
      font-family:inherits;
      p{
            font-size:20px;
      }
      h1{   
            text-transform:uppercase;
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
const Error = () => {
      return ( 
            <ErrorContainer>
                  <h1>Page Not Found</h1>
                  <p>The page you are looking for does not exist</p>
                  
                 
            
            </ErrorContainer>
            
       );
}
 
export default Error;