import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class NavItem extends Component{
  render(){
    
    const { index, isSelected, onClick, iconName, url } = this.props;
    const style = isSelected ? "nav-item-active-not-auth" : "nav-item-body-not-auth";

    if(iconName){
      const icon = "fa fa-fw fa-" + iconName;
      return(
        <li className="nav-item-not-auth">
          <Link to={url} className={style} onClick={() => onClick(index)}
          >
            <i className={icon} width="45" height="45"></i>{this.props.children}
          </Link>
        </li>
      );
    }

    return(
      <li className="nav-item-not-auth">
        <Link to={url} className={style} onClick={() => onClick(index)}
          >
            {this.props.children}
          </Link>
      </li>
    );    
  }
}

export default NavItem;