import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchF from './SearchF'
import SearchParts from './SearchParts'
import ShowBar from './ShowBar'
import ShowCount from './ShowCount'
import Footer from './Footer'
import Message from './Message'
import Information from './Information'
import Nowlive from './Nowlive'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Componente
} from "react-router-dom";
import Player from './Player';
import Temas from './Temas';
ReactDOM.render(
  <React.StrictMode>


   <Router>
         <ShowBar/>
        <Switch>
            <Route extact path="/list">


    <ShowCount />
     </Route>
          <Route extact path="/search">
          
        <SearchF />

          </Route>

          <Route extact path="/Listen">
          <Temas/>

         
  
            </Route>


          <Route extact path="/Live">


<Nowlive/>


          </Route>

          <Route extact path="/">


<App/>


          </Route>
        </Switch>


    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);
