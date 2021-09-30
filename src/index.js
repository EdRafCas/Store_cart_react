import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Container from './Components/Container';
import Header from './Components/Header';
import './index.css';
import App from './App';
import Colection from './Components/Colection';
import Contact from './Components/Contact';
import Info from './Components/Info';
import Cart from './Components/Cart';


WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

const ContainerPages = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;

`

const Index = () => {
  return ( 
    <Container className="alo">
      <BrowserRouter>
        <Header/>
        <ContainerPages >
          <Switch>
            <Route path="/Colection" exact={true} component={Colection}/> 
            <Route path="/Contact" exact={true} component={Contact}/> 
            <Route path="/Info" exact={true} component={Info}/>
            <Route path="/Cart" exact={true} component={Cart}/> 
            <Route path="/" exact={true} component={App}/>
            
            <App to="/"/>
          </Switch>
        </ContainerPages>
        
      
      </BrowserRouter>
      
    </Container>
      
    
    
   );
}
 

ReactDOM.render( <Index />, document.getElementById('root')
);