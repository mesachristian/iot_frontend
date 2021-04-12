import React, { Component } from 'react';
import './styles.css';

// COMPONENTS
import TabNav from 'components/TabNav';
import Tab from 'components/Tab';
import FollowSettings from './components/FollowSettings';

const initialState = {
    tabs : [
        {
            name : 'Follow',
            content : <FollowSettings />,
            active : true
        },

        {
            name : 'Like',
            content : 'Like',
            active : false
        },

        {
            name : 'Unfollow',
            content : 'Unfollow',
            active : false
        },

        {
            name : 'General',
            content : 'General',
            active : false
        }
    ],

    selectedTabIdx : 0
};

class Settings extends Component{

    constructor(props){
        super(props);
        this.state = initialState;

        this.onTabClick = this.onTabClick.bind(this);
    }

    onTabClick(tabIdx){
        this.setState( (prevState) => {
            let tabs = prevState.tabs;
            tabs[tabIdx].active = true;
            tabs[prevState.selectedTabIdx].active = (tabIdx != prevState.selectedTabIdx) ? false : true;
            
            return(
                { tabs : tabs, selectedTabIdx : tabIdx, }
            );
        });
    }

    render(){

        const {tabs} = this.state;

        return(
            <div className="settings">

                <div className="accounts-title-container">
                    <p className="accounts-title">Configuración</p>
                </div>

                <TabNav onTabClick={this.onTabClick}>

                    {tabs.map( (tab) => {
                        return(
                            <Tab name={tab.name} active={tab.active}>
                                {tab.content}
                            </Tab>
                        );
                    })}

                </TabNav>
            </div>
        );
    }
}

export default Settings;