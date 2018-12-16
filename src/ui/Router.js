import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { map } from 'lodash/fp';

import * as ROUTES from 'constants/RouterConstants';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <Switch>
                    {
                        map(route => {
                            <Route exact={route.exact} path={route.path} component={route.component} />
                        }, ROUTES)
                    }
                </Switch>
            </BrowserRouter>
        )
    }
}