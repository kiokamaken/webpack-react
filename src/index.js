import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/style.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>This is an App</div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));