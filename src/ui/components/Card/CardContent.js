import React, { Component } from 'react';

class CardContent extends Component {
    componentDidMount() {

    }

    render() {
        const Children = this.props.children;
        return <Children {...this.props}/>;
    }
}

export default CardContent;