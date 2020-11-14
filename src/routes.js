import React, { memo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default memo(Routes);
