import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';

class Logo extends React.Component{

    render(){

        const { appName , logo, onBrandClick } = this.props;

        const style = {
            marginTop : -20,
            width : 100,
            height : 100
        };

        return(
            <Link to="" className="nav-brand" onClick={() => onBrandClick()}>
                <img alt="Home" src={logo}  style={style}/>
            </Link>
        );

    }
}

export default Logo;

