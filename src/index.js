import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dividers from './HomePage/Dividers.js'
import Languages from './Languages.js'
import Tech from './Tech.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Learn from './Learn';
import Make from './Make.js';


ReactDOM.render(
  <React.StrictMode>

  <Router>
  <Switch>
    <Route exact path = "/" component={App}></Route>
  </Switch>   
     
      <Switch>
         <Route exact path ="/dividers" component ={Dividers} />
      </Switch>

      <Switch>
        <Route exact path='/languages' component ={Languages} />
      </Switch>

      <Switch>
        <Route exact path='/Tech' component={Tech} />
      </Switch>

      <Switch>
        <Route exact path='/learncpp' component={Learn}/>
      </Switch>

      <Switch>
      <Route exact path='/learnweb' component={Make}/>
      </Switch>

  </Router>
    
           
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
