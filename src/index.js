import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchF from './SearchF'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
   

	
   <Router>
   
      

        <Switch>
          
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

