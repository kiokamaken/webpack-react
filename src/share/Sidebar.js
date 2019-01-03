import React from 'react';
import { Link } from 'react-router-dom';
import constant from 'constants/SidebarConstants';

const { SIDEBARS } = constant;

function Sidebar() {
    return (
        <aside className="left-sidebar">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        {
                            SIDEBARS.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.url} className={item.effectClasses} aria-expanded={item.expandable}>
                                            <i className={item.iconClasses}></i>
                                            <span className="hide-menu">{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </div>
            <div className="sidebar-footer">
                <a href="" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings"></i></a>
                <a href="" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a>
                <a href="" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
            </div>
        </aside>
    );
}

export default Sidebar;