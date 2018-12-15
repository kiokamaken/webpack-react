import React, { Component } from 'react';

import Card from 'ui/components/Card/Card';
import BarChart from 'ui/components/Chart/BarChart'

class SaleOverview extends Component {
    constructor() {
        super();
    }

    renderHeader() {
        return (
            <div className="d-flex flex-wrap">
                <div>
                    <h3 className="card-title">Sales Overview</h3>
                    <h6 className="card-subtitle">Ample Admin Vs Pixel Admin</h6> </div>
                <div className="ml-auto">
                    <ul className="list-inline">
                        <li>
                            <h6 className="text-muted text-success"><i className="fa fa-circle font-10 m-r-10 "></i>Ample</h6> </li>
                        <li>
                            <h6 className="text-muted  text-info"><i className="fa fa-circle font-10 m-r-10"></i>Pixel</h6> </li>
                    </ul>
                </div>
            </div>
        )
    }

    renderChart() {
        const style = {
            height: '360px'
        };

        return <BarChart style={style} />;
    }

    render() {
        return(
            <Card title='Sales Overview' subTitle='Ample Admin Vs Pixel Admin' renderHeaderFn={this.renderHeader} component={this.renderChart} />
        )
    }
}

export default SaleOverview;