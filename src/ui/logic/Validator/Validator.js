import React, { Component } from 'react';

export default function Validator(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
        }
    
        componentDidMount() {

        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
}