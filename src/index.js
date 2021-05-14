import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchF from './SearchF'
import SearchParts from './SearchParts'
import Welcome from './Welcome'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Componente
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
   

	
   <Router>
   
      

        <Switch>
            <Route extact path="/list">
	<Welcome/>
          <SearchParts /></Route>
          <Route extact path="/search">
            <SearchF />
          </Route>
          <Route extac path="/">
            <App />
          </Route>

        


          
        </Switch>
    
    </Router>
	
  </React.StrictMode>,
  document.getElementById('root')
);

