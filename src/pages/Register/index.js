import React, { memo, useState, useEffect, useRef } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import FormFeedback from "../../components/FormFeedback";
import RegisterStyle from "./styles";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/auth.service";

const Register = () => {
  const [formError, setFormError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState();

  const history = useHistory();

  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    !!password && setPasswordError("");
    !!email && setEmailError("");
    !!name && setNameError("");
  }, [name, email, password]);

  useEffect(() => {
    if (nameError || passwordError || emailError || formError) {
      setHasError(true);
      setIsLoading(false);
    } else {
      setHasError(false);
    }
  }, [emailError, passwordError, nameError, formError]);

  const doFormValidations = (e) => {
    !hasError && setIsLoading(true);

    e.preventDefault();
    const stopOnRequired = !name || !email || !password;
    if (!name) setNameError("In the future people still having name, right?");
    if (!email) setEmailError("Give us your e-mail.");
    if (!password) setPasswordError("Set a password.");

    if (stopOnRequired) return;

    const regex = {
      name: /^.{3,255}$/,
      email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      password: /^.{6,35}$/,
    };

    const validName = regex.name.test(name);
    const validEmail = regex.email.test(email);
    const validPassword = regex.password.test(password);

    const stopOnRegex = !validName || !validEmail || !validPassword;

    if (!validName) setNameError("Too small or to big name");
    if (!validEmail) setEmailError("Invalid e-mail");
    if (!validPassword) setPasswordError("Invalid password");

    if (stopOnRegex) return;

    submitForm();
  };

  const submitForm = async () => {
    try {
      const { data } = await authService.signup({ name, email, password });

      if (!data) throw new Error("Something went wrong");
      authService.storeUser(data);

      history.push("/upload");
    } catch (err) {
      setFormError(
        "Unfortunately something is wrong with us. Please, try again."
      );
    }
  };

  return (
    <RegisterStyle>
      <main className="container">
        <h1>Verstand</h1>
        <h2>Create account</h2>
        <form onSubmit={doFormValidations}>
          <Input
            placeholder="Like Takeshi Kovacs"
            tabIndex="0"
            onChange={({ target: { value } }) => setName(value)}
            name="name"
            autoFocus
            id="name"
            label="Name"
            maxLength={255}
            error={nameError}
          />
          <Input
            maxLength={255}
            tabIndex="0"
            onChange={({ target: { value } }) => setEmail(value)}
            type="email"
            name="email"
            id="email"
            label="E-mail address"
            placeholder="Like synth@carbon.io"
            required
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
            required
            placeholder="Like ************"
            error={passwordError}
          />
          <FormFeedback feedback={formError} />

          <Button type="submit" isLoading={isLoading} tabIndex="0">
            Create account
          </Button>
        </form>

        <footer>
          <Link to="/login">
            <div>Already member?</div>
            <div>Sign in</div>
          </Link>
        </footer>
      </main>
    </RegisterStyle>
  );
};

export default memo(Register);
