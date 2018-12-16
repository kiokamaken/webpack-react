import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/style.scss';

import Router from './ui/Router';
import App from './ui/App';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <App>
                <Router />
            </App>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('app'));