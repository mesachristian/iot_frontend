import React, { Component } from 'react';
import './styles.css';

class AddAccountForm extends Component{

    constructor(props){
        super(props);
        this.submitFormData = this.submitFormData.bind(this);
    }

    submitFormData(event){
        event.preventDefault();
        let userLoginData = {
            email : document.getElementById("emailLoginField").value,
            password : document.getElementById("passwordLoginField").value
        };
        this.props.onSubmit(userLoginData);
    }

    componentDidMount(){
        const inputs = document.querySelectorAll(".input");

        inputs.forEach(input => {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);
        });
    }

    render(){

        return(
            <div className="login-content">
                <form>
                    <h2 className="title">Log in</h2>
                    <div className="input-div one">
                        <div className="i">
                                <i className="fas fa-user"></i>
                        </div>
                        <div className="div">
                                <h5>Correo o Nombre de Usuario</h5>
                                <input id="emailLoginField" type="text" className="input" />
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i"> 
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                                <h5>Contraseña</h5>
                                <input id="passwordLoginField" type="password" className="input" />
                        </div>
                    </div>
                    
                    <a className="forgot-btn" href="#forgotpass">¿Olvidé mi contraseña?</a>
                    
                    <input type="submit" className="login-btn" value="Log in" onClick={this.submitFormData}/>
                    
                </form>
            </div>
        );
    }
}

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}

export default AddAccountForm;