import React, { memo, useState, useEffect } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import FormFeedback from "../../components/FormFeedback";
import RegisterStyle from "./styles";
import { Link } from "react-router-dom";

const Register = () => {
  const [error] = useState();
  // const history = useHistory();

  useEffect(() => {
// setTimeout(() => {
//   history.push("/upload")
// },5000)
  },[]) 

  return (
    <RegisterStyle>
      <div className="container">
        <h1>Verstand</h1>
        <h2>Create account</h2>

        <Input tabIndex="0" type="name" name="name" id="name" label="Name" />
        <Input
          tabIndex="0"
          type="email"
          name="email"
          id="email"
          label="E-mail address"
        />
        <Input
          tabIndex="0"
          type="password"
          name="senha"
          id="senha"
          label="Senha"
        />
        <FormFeedback feedback={error} />

        <Button tabIndex="0">Create account</Button>

        <footer>
          <Link to="/login">
            <div>Already member?</div>
            <div>Sign in</div>
          </Link>
        </footer>
      </div>
    </RegisterStyle>
  );
};

export default memo(Register);
