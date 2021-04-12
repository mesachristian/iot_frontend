import React from 'react';
import './styles.css';

export default function ErrorMessage(props) {
    return (
      <div className="register-alert" style={{ color: "red" }}>
        <p>{props.children}</p>
      </div>
    );
}