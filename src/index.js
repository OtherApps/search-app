import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchF from './SearchF'
import SearchParts from './SearchParts'
import Welcome from './Welcome'
import ShowBar from './ShowBar'
import ShowCount from './ShowCount'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Componente
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
   

	
   <Router>
   
      <ShowBar/>
	  

        <Switch>
            <Route extact path="/list">
	
          <ShowCount /></Route>
          <Route extact path="/search">
            <SearchF />
          </Route>
          <Route extac path="/">
		
		    
            <App/> 
          </Route>

        <Route extac path="/count">
		
		    
            <ShowCount/> 
          </Route>


          
        </Switch>

	
    </Router>
	
  </React.StrictMode>,
  document.getElementById('root')
);

