import React, { Component } from 'react';

class PieChart extends Component {
    constructor() {
        super();
    }

    render() {
        return <div id="visitor" {...this.props}></div>
    }
}

export default PieChart;