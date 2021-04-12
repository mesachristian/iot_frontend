import React, { useState, useEffect } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "context/AuthContext";

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

export default function LoginPage() {
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
      history.push("/");
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
  });

  return (
    <div >
      

        

        <div className="form-content">
          <form autoComplete="off">
            <h2 className="form-title">Log in</h2>

            <div className="input-field-login">
              <div className="icon">
                <i className="fas fa-user"></i>
              </div>

              <div className="container">
                <h5 className="title">Correo</h5>
                <input id="emailLoginField" type="text" className="input" />
              </div>
            </div>

            <div className="input-field-login">
              <div className="icon">
                <i className="fas fa-lock"></i>
              </div>
              <div className="container">
                <h5 className="title">Contraseña</h5>
                <input id="passwordLoginField" type="password" className="input" />
              </div>
            </div>

            <a className="forgot-btn" href="#forgotpass">
              ¿Olvidé mi contraseña?
            </a>

            {error && <MensajeError>{error}</MensajeError>}

            <input
              type="submit"
              className="submit-btn"
              value="Log in"
              onClick={submitFormData}
            />
          </form>
        </div>
      

    </div>
  );
}

function MensajeError(props) {
    return (
      <div className="register-alert" style={{ color: "red" }}>
        <p>{props.children}</p>
      </div>
    );
}