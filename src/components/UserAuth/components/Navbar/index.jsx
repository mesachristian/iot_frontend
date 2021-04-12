import React, { Component } from 'react';
import './styles.css';

import CircularIconButton from 'components/CircularIconButton';

import { ReactComponent as MenuIcon} from 'icons/menu_icon.svg';

class Navbar extends Component{

    render(){ 
        return(
            <div className="navbar">
                
                <div className="side-menu-button">
                    <CircularIconButton icon={<MenuIcon/>} onClick={() => this.props.sideMenuButtonClick()}/>
                </div>

                <ul className="navbar-nav">
                    {this.props.children}
                </ul>

            </div>
        );
    }
}

export default Navbar;

