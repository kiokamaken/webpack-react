import React, { Component } from 'react';

import Header from 'share/Header';
import Footer from 'share/Footer';
import Sidebar from 'share/Sidebar';

import PageTitle from 'share/PageTitle';
import Breadcrum from 'share/Breadcrum';

import DeviceStatistics from './components/DeviceStatistics';
import SaleOverview from './components/SaleOverview';
import SkillSet from './components/SkillSet';

class App extends Component {
    render() {
        return (
            <div id="main-wrapper">
                <Header />
                <Sidebar />

                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="row page-titles">
                            <div className="col-md-5 col-8 align-self-center">
                                <PageTitle />
                                <Breadcrum />
                            </div>
                        </div>

                        <div className='row'>
                            {this.props.children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App