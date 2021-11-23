import React, {useEffect} from 'react';
import styled, {keyframes} from 'styled-components';

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;

const ContainerAlert = styled.div`
      z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
    p{
            background: #000;
            color: #fff;
            padding: 1.25rem 2.5rem; /* 20px 40px */
            border-radius: 0.31rem; /* 5px */
            box-shadow: 0px 0px 15px rgba(0,0,0,.1);
            text-align: center;

      }
      
`

const Alert = ({alert, changeAlert}) => {
      useEffect(()=>{
            let time;
            if(alert ===true){
                  time= setTimeout(()=>{
                        changeAlert(false);
                  }, 4000)
            }
            return(()=> clearTimeout(time))
      }, [alert, changeAlert]);

      return ( 
            <>
                  {alert &&
                  <ContainerAlert>
                        <p>The product was added sucessfully</p>
                  </ContainerAlert>
                  
                  }
            </>

       );
}
 
export default Alert;


