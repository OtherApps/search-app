import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchF from './SearchF'
import SearchParts from './SearchParts'
import Welcome from './Welcome'
import ShowBar from './ShowBar'
import ShowCount from './ShowCount'
import Footer from './Footer'
import BoldResult from "./BoldResult"
import Message from './Message'
import RadioF from './RadioF'
import Information from './Information'
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

    <Information/>
     </Route>
          <Route extact path="/search">
            <SearchF />
          </Route>
          <Route extact path="/">


<App/>


          </Route>
        </Switch>


    </Router>
<Footer/>

  </React.StrictMode>,
  document.getElementById('root')
);
