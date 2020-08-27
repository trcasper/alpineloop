import React from 'react';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path = '/' component={Landing}/>
        <Route path = '/about' component={About} />
    </Switch>
)