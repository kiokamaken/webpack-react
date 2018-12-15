import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/style.scss';

import App from 'ui/App';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <App />
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('app'));