import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/style.scss';

import Router from 'ui/Router';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router />
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('app'));