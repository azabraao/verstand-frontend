import React, { memo } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import LoginStyle from "./styles";

const Login = () => {
  return (
    <LoginStyle>
      <div className="container">
        <h1>Verstand</h1>
        <h2>Login</h2>

        <Input type="email" name="email" id="email" label="E-mail address" />
        <Input type="password" name="senha" id="senha" label="Senha" />
        <Button>
          Sign in
        </Button>
      </div>
    </LoginStyle>
  );
};

export default memo(Login);
