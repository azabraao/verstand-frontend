import React, { memo, useState } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import FormFeedback from "../../components/FormFeedback";
import RegisterStyle from "./styles";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState();

  return (
    <RegisterStyle>
      <div className="container">
        <h1>Verstand</h1>
        <h2>Create account</h2>

        <Input type="name" name="name" id="name" label="Name" />
        <Input type="email" name="email" id="email" label="E-mail address" />
        <Input type="password" name="senha" id="senha" label="Senha" />
        <FormFeedback feedback={error} />

        <Button>Create account</Button>

        <footer>
          <Link to="/register">
            <div>Not a member?</div>
            <div>Sign up now</div>
          </Link>
        </footer>
      </div>
    </RegisterStyle>
  );
};

export default memo(Register);
