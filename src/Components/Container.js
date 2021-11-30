import styled from 'styled-components';

const Container = styled.div`
    background: #fff;
    width: 70%;
    min-width:1140px;
    max-width: 1140px; 
    height: 100%;
    min-height:80rem;
    overflow-y: auto;
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
    border-radius: 0; 
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    z-index: 100;

    @media(max-width: 1140px){ 
        width: 95%;
        min-width:720px;
           
    }
    @media(max-width: 720px){ 
        width: 100%;
        min-width:600px;
           
    }
 
`;

export default Container;