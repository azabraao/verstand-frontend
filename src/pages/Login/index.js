import React, { memo, useState } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import LoginStyle from "./styles";
import { Link } from "react-router-dom";
import FormFeedback from "../../components/FormFeedback";

const Login = () => {
  const [error, setError] = useState();

  return (
    <LoginStyle>
      <div className="container">
        <h1>Verstand</h1>
        <h2>Login</h2>

        <Input type="email" name="email" id="email" label="E-mail address" />
        <Input type="password" name="senha" id="senha" label="Senha" />
        <FormFeedback feedback={error} />

        <Button>Sign in</Button>
        <footer>
          <Link to="/register">
            <div>Not a member?</div>
            <div>Sign up now</div>
          </Link>
        </footer>
      </div>
    </LoginStyle>
  );
};

export default memo(Login);
