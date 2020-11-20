import React, { memo, useState, useEffect } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import LoginStyle from "./styles";
import { Link, useHistory } from "react-router-dom";
import FormFeedback from "../../components/FormFeedback";
import authService from "../../services/auth.service";

const Login = () => {
  const [formError, setFormError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    localStorage.clear();
  }, []);
  
  useEffect(() => {
    !!password && setPasswordError("");
    !!email && setEmailError("");
  }, [email, password]);

  useEffect(() => {
    (passwordError || emailError || formError) && setIsLoading(false);
  }, [emailError, passwordError]);

  const doFormValidations = (e) => {
    setIsLoading(true);

    e.preventDefault();
    const stopOnRequired = !email || !password;
    if (!email) setEmailError("Give us your e-mail.");
    if (!password) setPasswordError("Set a password.");

    if (stopOnRequired) return;

    const regex = {
      email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      password: /^.{6,35}$/,
    };

    const validEmail = regex.email.test(email); 
    const validPassword = regex.password.test(password);

    const stopOnRegex = !validEmail && !validPassword;

    if (!validEmail) setEmailError("Invalid e-mail");
    if (!validPassword) setPasswordError("Invalid password");

    if (stopOnRegex) return;

    submitForm();
  };

  const submitForm = async () => {
    try {
      const { data } = await authService.authenticate({ email, password });

      if (!data) throw new Error("Something went wrong");
      authService.storeUser(data);

      history.push("/profile");
    } catch (err) {
      setFormError(
        "Unfortunately something is wrong with us. Please, try again."
      );
    }
  };

  return (
    <LoginStyle>
      <main className="container">
        <h1>Verstand</h1>
        <h2>Login</h2>
        <form onSubmit={doFormValidations}>
          <Input
            maxLength={255}
            tabIndex="0"
            onChange={({ target: { value } }) => setEmail(value)}
            type="email"
            name="email"
            id="email"
            label="E-mail address"
            placeholder="Like synth@carbon.io"
            error={emailError}
          />
          <Input
            maxLength={255}
            onChange={({ target: { value } }) => setPassword(value)}
            tabIndex="0"
            type="password"
            name="password"
            id="password"
            label="password"
            placeholder="Like ************"
            error={passwordError}
          />
          <FormFeedback feedback={formError} />

          <Button type="submit" isLoading={isLoading} tabIndex="0">
            Sign in
          </Button>
        </form>
        <footer>
          <Link to="/register">
            <div>Not a member?</div>
            <div>Sign up now</div>
          </Link>
        </footer>
      </main>
    </LoginStyle>
  );
};

export default memo(Login);
