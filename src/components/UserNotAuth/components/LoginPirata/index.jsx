import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useAuth } from "context/AuthContext";

import "./styles.css";

import wave from './resources/wave.png';
import at_home_logo from './resources/at_home_logo.svg';
import avatar from './resources/avatar.svg';

import TextInput from '../FormComponents/TextInput';
import PasswordInput from '../FormComponents/PasswordInput';
import ErrorMessage from '../FormComponents/ErrorMessage';

function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
    parent.classList.remove("wrong");
}
  
function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
}

export default function LoginPirata(){

    const [error, setError] = useState("");
    const history = useHistory();
    const { login } = useAuth();

    async function submitFormData(event) {
        event.preventDefault();

        let userLoginData = {
            email: document.getElementById("emailLoginField").value,
            password: document.getElementById("passwordLoginField").value,
        };

        try {
            await login(userLoginData.email, userLoginData.password);
            history.push("/dashboard");
            history.go(0);
        } catch {
            return setError("Error al iniciar sesion");
        }

        return setError("");
    }

    useEffect(() => {
        const inputs = document.querySelectorAll(".input");
    
        inputs.forEach((input) => {
          input.addEventListener("focus", addcl);
          input.addEventListener("blur", remcl);
        });
    }, []);

    return(
        <div className="login-page-container">
            <img className="wave" src={wave}/>

            <div className="container">
                <div className="img">
                    <img src={at_home_logo}/>
                </div>

                <div className="login-content">
                    <form>
                        <img src={avatar}/>
                        <h2 className="title">Bienvenido</h2>

                        <TextInput inputID="emailLoginField" hint="Correo" iconName="user"/>

                        <PasswordInput inputID="passwordLoginField" hint="Contraseña" iconName="lock"/>

                        <a className="fgt-pass-btn" href="#">¿Olvide mi contraseña?</a>

                        {error && <ErrorMessage>{error}</ErrorMessage>}

                        <input type="submit" className="submit-form-btn" value="Login" onClick={submitFormData}/>

                    </form>
                </div>
            </div>

        </div>
    );
}
