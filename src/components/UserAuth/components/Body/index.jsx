import React, { Component, useEffect } from 'react';
import './styles.css';

import { Switch , Route, Redirect } from 'react-router-dom';

import {useAuth} from 'context/AuthContext';

// COMPONENTS
import Dashboard from './components/Dashboard';
import Actuators from './components/Actuators';

class Body extends Component{

    render(){
        return(
            <div className="body">
                <Switch>

                    <Route path='/dashboard'> <Dashboard sideMenuFlag={this.props.sideMenuOpened}/> </Route>

                    <Route path='/thing-speak'><ThingSpeak/></Route>

                    <Route path='/analytics'> <Analytics /></Route>
                    
                    <Route path="/actuators"> <Actuators /></Route>
                    
                    <Route path='/logout'><Logout/></Route>

                    <Route path="/"><Redirect to="/dashboard"/></Route>
                    
                </Switch>
            </div>
        );
    }
}

function ThingSpeak(){
    return(
        <div>Thing Speak</div>
    );
}

function Analytics(){
    return(
        <div>Analiticas</div>
    );
}

function Logout(){
    const {logout} = useAuth();

    useEffect( () => {
        logout();
    },[]);

    return(
        <Redirect to="/"/>
    );
}

export default Body;