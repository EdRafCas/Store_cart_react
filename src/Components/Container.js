import styled from 'styled-components';

const Container = styled.div`
    background: #fff;
    width: 70%;
    max-width: 1140px; /*1110px*/
    height: 100%;
    min-height:80rem;
    overflow-y: auto;
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
    border-radius: 0; /* 10px */
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    z-index: 100;
 
`;

export default Container;