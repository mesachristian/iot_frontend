import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import AboutPage from './components/AboutPage';
import LoginPirata from './components/LoginPirata';

import logo from './resources/logo.png';

import './styles.css';

class UserNotAuth extends Component{

    render(){
        const navbarProps = {
            appName : "S-Automata",
            logo : logo,
            items : buildNavbarItems(),
            loginRequested : this.props.loginRequest,
            registerRequested : this.props.registerRequest
        };

        return(
            <div className="user-not-auth">
                <Router>
                    <Navbar {...navbarProps}></Navbar>
                    
                    <div className="user-not-auth-body">
                        <Switch>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/login" component={LoginPirata}/>
                            <Route path="/signup" component={RegisterPage}/>
                            <Route path="/" component={HomePage}/>
                        </Switch>
                    </div>
                    
                </Router>
            </div>
        );
    }
}

function buildNavbarItems(){

    let items = [];
    let element_1 = { name : 'Log in' , iconName : '', hasIcon : false, isSelected : false, url: "/login" };
    let element_2 = { name : 'Registrarse' , iconName : '', hasIcon : false, isSelected : false, url: "/signup" };
    let element_3 = { name : 'Información' , iconName : '', hasIcon : false, isSelected : false, url: "/about" };
    let element_4 = { name : '' , iconName : 'home', hasIcon : true, isSelected : false, url: "/" };
  
    items.push(element_1);
    items.push(element_2);
    items.push(element_3);
    items.push(element_4);
    
    return items;
}

export default UserNotAuth;
