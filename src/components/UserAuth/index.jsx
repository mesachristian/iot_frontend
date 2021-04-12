import React, { Component, useState } from 'react';
import './styles.css';

// COMPONENTS
import CircularIconButton from 'components/CircularIconButton';

import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import Body from './components/Body';

// ICONS
import { ReactComponent as LogoutIcon } from 'icons/logout.svg';
import { ReactComponent as ArrowIcon } from 'icons/caret.svg'
import { BrowserRouter as Router } from 'react-router-dom';

import {useAuth} from 'context/AuthContext';

class UserAuth extends Component{

    constructor(props){
        super(props);
        this.state = {
            showSideMenu : true
        };

        this.sideMenuClicked = this.sideMenuClicked.bind(this);
    }

    sideMenuClicked(){
        this.setState( (prevState) =>{
            return{
                 ...prevState,
                 showSideMenu : !prevState.showSideMenu
            }
         });
    }

    render(){

        const showMenu = this.state.showSideMenu;
        
        return(
            <div className="main">
                
                <Router>
                    <SideMenu opened={showMenu}/>

                    <div className="page-container">
                        
                        <Navbar sideMenuButtonClick={this.sideMenuClicked}>
                            <NavItem icon={<ArrowIcon />}>
                              <DropdownMenu/>
                            </NavItem>
                        </Navbar>

                        <Body sideMenuOpened={showMenu}/>

                    </div>  
                </Router> 
                
            </div>
        );
    }
}


function NavItem(props) {
    
    const [open, setOpen] = useState(false);

    return (
      <li className="nav-item">
        <CircularIconButton icon={props.icon} onClick={() => { setOpen(!open) }}/>

        {open && props.children}
      </li>
    );
}

function IconPirata(){
  return(
    <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  );
}

function DropdownMenu(){

  const {logout} = useAuth();

  function DropdownItem(props){
    return(
      <a className="dropdown-menu-item" onClick={props.onClick}>{props.children}</a>
    );
  }

  return(
    <div className="dropdown-menu">
      <DropdownItem onClick={logout}>
        <CircularIconButton icon={<LogoutIcon/>}/>
        <p style={{ marginLeft : 2, fontWeight : 700 }}>Logout</p>
      </DropdownItem>
    </div>
  );
}
export default UserAuth;