import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="topbar">
                <nav className="navbar top-navbar navbar-toggleable-sm navbar-light">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">
                            <b>
                                <img src="../static/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                            </b>
                            <span>
                                <img src="../static/images/logo-light-text.png" className="light-logo" alt="homepage" />
                            </span>
                        </a>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-md-0">
                            <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                                href="javascript:void(0)"><i className="mdi mdi-menu"></i></a>
                            </li>
                            <li className="nav-item hidden-sm-down search-box">
                                <a className="nav-link hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)"><i className="ti-search"></i></a>
                                <form className="app-search">
                                    <input type="text" className="form-control" placeholder="Search & enter"/> <a className="srh-btn"><i className="ti-close"></i></a>
                                </form>
                            </li>
                        </ul>
                        <ul className="navbar-nav my-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="../static/images/users/1.jpg" alt="user" className="profile-pic m-r-10" /> Markarn Doe
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;