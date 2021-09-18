import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Container from './Components/Container';
import Header from './Components/Header';
import './index.css';
import App from './App';
import Colection from './Components/Colection';
import Contact from './Components/Contact';
import Info from './Components/Info';


WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

const Index = () => {
  return ( 
    <Container>
      <BrowserRouter>
        <Header/>
      
        <Switch>
          <Route path="/Colection" exact={true} component={Colection}/> 
          <Route path="/Contact" exact={true} component={Contact}/> 
          <Route path="/Info" exact={true} component={Info}/> 
          <Route path="/" exact={true} component={App}/>
          <App to="/"/>
        </Switch>
      
      </BrowserRouter>
      
    </Container>
      
    
    
   );
}
 

ReactDOM.render( <Index />, document.getElementById('root')
);