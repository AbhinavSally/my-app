import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import App from './App';
import Login from './login';
import signup from './signup';
import Dashboard from './Dashboard'

const Routes=()=>{
    return(
        <BrowserRouter>
        {/* <Menu/>  */}
          <Switch>
           <Route path="/" exact component = {App}/>
            <Route path="/login" exact component = {Login}/>
            <Route path="/signup" exact component = {signup}/>
            <Route path="/Dashboard" exact component = {Dashboard}/>

            {/* <Route path="/signup" exact component = {Signup}/> */}
          </Switch>
        </BrowserRouter>
    )
}

export default Routes