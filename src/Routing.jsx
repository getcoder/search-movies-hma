import React from 'react';
import ReactDOM from 'react-dom';

import Popular from './Popular';
import RoutAbout from './RoutAbout';
import RoutSearch from './RoutSearch';


import { Switch, Route } from "react-router-dom";

function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={Popular} />
            <Route path="/about" component={RoutAbout} />
            <Route path="/search" component={RoutSearch} />
        </Switch>
    );
}

export default Routing;