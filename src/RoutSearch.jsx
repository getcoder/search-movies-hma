import React from 'react';
import ReactDOM from 'react-dom';

import Pusto from './Pusto';
import Home2 from './Home2';

import { Switch, Route } from "react-router-dom";

function RoutSearch() {
    return (
        <Switch>
            <Route exact path="/search" component={Pusto} />
            <Route path="/search/:query" component={Home2} />
        </Switch>
    );
}

export default RoutSearch;