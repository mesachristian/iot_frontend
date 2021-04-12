import React from 'react';
import './styles.css';

export default function Input({ inputID, iconName, hint, type }){
    
    const iconClass = `fas fa-${iconName}`;

    return(
        <div className="input-div one">
            <div className="i">
                <i className={iconClass}></i>
            </div>
            <div className="div">
                <h5>{hint}</h5>
                <input id={inputID} type={type} className="input"/>
            </div>
        </div>
    );
}