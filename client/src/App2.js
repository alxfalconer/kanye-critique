import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home2 from "./components/Home2";
import Dashboard from "./components/Dashboard"

export default class App2 extends Component {
    render() {
        return (
            <div className='app'>
                 <BrowserRouter>
                 <Switch>
                     <Route exact path={"/"} component={Home2} />
                     <Route exact path={"/dashboard"} component={Dashboard} />
                 </Switch>
                 </BrowserRouter>
            </div>
        );
    }
}