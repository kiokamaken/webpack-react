import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside className="left-sidebar">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li> <a className="waves-effect waves-dark" href="index.html" aria-expanded="false"><i className="mdi mdi-gauge"></i><span
                                        className="hide-menu">Dashboard</span></a>
                            </li>
                            <li> <a className="waves-effect waves-dark" href="pages-profile.html" aria-expanded="false"><i
                                        className="mdi mdi-account-check"></i><span className="hide-menu">Profile</span></a>
                            </li>
                            <li> <a className="waves-effect waves-dark" href="table-basic.html" aria-expanded="false"><i className="mdi mdi-table"></i><span
                                        className="hide-menu">Basic Table</span></a>
                            </li>
                            <li> <a className="waves-effect waves-dark" href="icon-material.html" aria-expanded="false"><i
                                        className="mdi mdi-emoticon"></i><span className="hide-menu">Icons</span></a>
                            </li>
                            <li> <a className="waves-effect waves-dark" href="map-google.html" aria-expanded="false"><i className="mdi mdi-earth"></i><span
                                        className="hide-menu">Google Map</span></a>
                            </li>
                            <li> <a className="waves-effect waves-dark" href="pages-blank.html" aria-expanded="false"><i className="mdi mdi-book-open-variant"></i><span
                                        className="hide-menu">Blank Page</span></a>
                            </li>
                            <li> <a className="waves-effect waves-dark" href="pages-error-404.html" aria-expanded="false"><i
                                        className="mdi mdi-help-circle"></i><span className="hide-menu">Error 404</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="sidebar-footer">
                    <a href="" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings"></i></a>
                    <a href="" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a>
                    <a href="" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
                </div>
            </aside>
        )
    }
}

export default Sidebar;