import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Smart from './pages/Smart';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/'component = {Login}/>
            <Route path='/smart' component = {Smart}/>
        </Switch>
        </BrowserRouter>
    );
}