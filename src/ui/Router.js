import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import App from './App';
import constant from '../constants/RouterConstants';
const { ROUTES } = constant;

export default class Router extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter basename="/">
                <App>
                    <Switch>
                        {
                            ROUTES.map((route, index) => {
                                return <Route exact path={route.path} component={route.component} key={index}/>
                            })
                        }
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}