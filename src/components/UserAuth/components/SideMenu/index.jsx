import React, { Component } from 'react';
import './styles.css';

import {ReactComponent as CompanyLogo} from 'icons/image2vector.svg';

import { Link } from "react-router-dom";

// {url : "/thing-speak", name : "Thing speak", icon : "chart-line"},

const menuItems = [
    {url : "/dashboard", name : "Dashboard", icon : "chart-pie"},
    
    {url : "/analytics", name : "Analiticas", icon : "chart-line"},
    {url : "/actuators", name : "Actuadores", icon : "cogs"},
    {url : "/logout", name : "Logout", icon : "power-off"}
];

class SideMenu extends Component{

    render(){
        const {opened} = this.props;

        const style = opened ? "" : "side-menu-closed";

        return(
            <div className={`side-menu ${style}`}>

                <div className="side-menu-logo-container">
                    <a><CompanyLogo /></a>
                </div>

                <ul className="side-menu-items">
                    {menuItems.map( (item, itemIdx) => {
                        
                        const icon = "fa fa-fw fa-" + item.icon;

                        return(
                            
                            <Link to={item.url} style={{textDecoration : 'none'}}>
                                <li key={itemIdx} className="menu-item">

                                    <div className="menu-item-container">
                                        <i className={icon} width="45" height="45"></i>
                                        <p style={{marginLeft : 5}}>{item.name}</p>
                                    </div>

                                </li>
                            </Link>

                        );
                    })}
                </ul>
            </div>
        );
    }
}

//
export default SideMenu;
