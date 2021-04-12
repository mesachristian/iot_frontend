import React, { useState, useEffect, useDebugValue } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "context/AuthContext";

import "./styles.css";

import wave from "./resources/wave.png";
import bg from "./resources/bg.svg";
import avatar from "./resources/avatar.svg";

import TextInput from "../FormComponents/TextInput";
import PasswordInput from "../FormComponents/PasswordInput";
import ErrorMessage from "../FormComponents/ErrorMessage";

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

export default function RegisterPage() {
  const [error, setError] = useState("");
  const history = useHistory();
  const { signup } = useAuth();

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  });

  async function submitFormData(event) {
    event.preventDefault();

    let userData = {
      username: document.getElementById("registerUsernameField").value,
      email: document.getElementById("registerEmailField").value,
      password: document.getElementById("registerPasswordField").value,
      checkPassword: document.getElementById("registerCheckPasswordField")
        .value,
    };

    if (userData.password !== userData.checkPassword) {
      return setError("Las contraseñas no coinciden");
    }

    try {
      await signup(userData.email, userData.password, userData.username);
      history.push("/");
    } catch {
      return setError("Error al crear la cuenta");
    }

    return setError("");
  }

  return (
    <div className="login-page-container">
      <img className="wave" src={wave} />

      <div className="container">

        <div className="img">
          <img src={bg} />
        </div>

        <div className="register-content">
          <form>
            <img src={avatar} />
            <h2 className="register-title">Registro</h2>

            <TextInput inputID="registerUsernameField" hint="Nombre de usuario" iconName="user"/>

            <TextInput inputID="registerEmailField" hint="Correo" iconName="envelope"/>

            <PasswordInput inputID="registerPasswordField" hint="Contraseña" iconName="lock"/>

            <PasswordInput inputID="registerCheckPasswordField" hint="Confirmar Contraseña" iconName="lock"/>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <input
              type="submit"
              className="submit-form-btn"
              value="Registrarse"
              onClick={submitFormData}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
