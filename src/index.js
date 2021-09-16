import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import Container from './Components/Container';
import Header from './Components/Header';
import './index.css';
import App from './App';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

const Index = () => {
  return ( 
    <Container>
      <Header/>
      <App/>
    </Container>
      
    
    
   );
}
 

ReactDOM.render( <Index />, document.getElementById('root')
);