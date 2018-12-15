import React, { Component } from 'react';

class Breadcrum extends Component {
    render() {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
            </ol>
        )
    }
}

export default Breadcrum;