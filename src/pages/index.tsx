import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

import styles from "../styles/pages/Login.module.css";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  function togglePasswordVisible() {
    setPasswordVisible(!passwordVisible);
  }

  function toggleMessageVisible() {
    setMessageVisible(!messageVisible);
  }

  function submitForm() {
    toggleMessageVisible();
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.title}>
          <img src="/assets/img/logotipo.png" alt="Logotipo" />
          <h1>Solução Integra</h1>
        </div>
      </div>
      <div className={styles.login}>
        <form action="#">
          <div className={styles.title}>
            <p>Entrar</p>
          </div>
          {messageVisible && (
            <div className={styles.message}>
              <span>
                Usuário ou senha inválidos! <br />
                Por favor, tente novamente.
              </span>
              <div className={styles.closeMessage}>
                <button type="button" onClick={toggleMessageVisible}>
                  x
                </button>
              </div>
            </div>
          )}

          <Input
            type="text"
            name="username"
            label="Usuário"
            placeholder="Insira seu usuário"
          />

          <Input
            type={passwordVisible ? "text" : "password"}
            name="password"
            label="Senha"
            placeholder="Insira sua senha"
          >
            <button
              className={styles.showPassword}
              type="button"
              onClick={togglePasswordVisible}
            >
              {passwordVisible ? "ocultar" : "mostrar"}
            </button>
          </Input>

          <Button value="ENTRAR" onClick={submitForm} />
        </form>
      </div>
    </div>
  );
}
