import React, { Component } from 'react';

import Card from 'ui/components/Card/Card';
import PieChart from 'ui/components/Chart/PieChart';

class DeviceStatistics extends Component {
    constructor() {
        super();
    }

    renderExtraContent() {
        return (
            <>
                <div>
                    <hr className="m-t-0 m-b-0" />
                </div>
                <div className="card-block text-center ">
                    <ul className="list-inline m-b-0">
                        <li>
                            <h6 className="text-muted text-info"><i className="fa fa-circle font-10 m-r-10 "></i>Mobile</h6> </li>
                        <li>
                            <h6 className="text-muted  text-primary"><i className="fa fa-circle font-10 m-r-10"></i>Desktop</h6> </li>
                        <li>
                            <h6 className="text-muted  text-success"><i className="fa fa-circle font-10 m-r-10"></i>Tablet</h6> </li>
                    </ul>
                </div>
            </>
        );
    }

    renderChart() {
        const style = {
            height: '290px'
        };

        return <PieChart style={style} />
    }
        
    render() {
        return(
            <Card title='Our Visitors' subTitle='Different Devices Used to Visit' component={this.renderChart}>
                {this.renderExtraContent}
            </Card>
        )
    }
}

export default DeviceStatistics;