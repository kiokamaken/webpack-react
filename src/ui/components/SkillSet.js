import React, { Component } from 'react';

import Card from './Card/Card';
import ProgressBar from './ProgressBar/ProgressBar';

class SkillSet extends Component {
    renderContent() {
        return (
            <>
                <h5 class="m-t-30">Wordpress <span class="pull-right">80%</span></h5>
                <ProgressBar class="bg-success" valueNow="80" style={{height:'6px'}}/>
                <h5 class="m-t-30">HTML 5 <span class="pull-right">90%</span></h5>
                <ProgressBar class="bg-info" valueNow="90" style={{height:'6px'}}/>
                <h5 class="m-t-30">jQuery <span class="pull-right">50%</span></h5>
                <ProgressBar class="bg-danger" valueNow="50" style={{height:'6px'}}/>
                <h5 class="m-t-30">Photoshop <span class="pull-right">70%</span></h5>
                <ProgressBar class="bg-warning" valueNow="70" style={{height:'6px'}}/>
            </>
        )
    }

    render() {
        return (
            <Card title='Skill Set' component={this.renderContent} />
        )
    }
}

export default SkillSet;