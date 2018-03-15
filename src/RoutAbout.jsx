import React from 'react';
import ReactDOM from 'react-dom';

import AboutMAXON from './AboutMAXON';
import AboutFilm2 from './info_page/AboutFilm2';

import { Switch, Route } from "react-router-dom";

function RoutAbout() {
    return (
        <Switch>
            <Route exact path="/about" component={AboutMAXON} />
            <Route path="/about/:id" component={AboutFilm2} />
        </Switch>
    );
}

export default RoutAbout;