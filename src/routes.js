import React, { memo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Download from "./pages/Download";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Upload from "./pages/Upload";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/upload" exact component={Upload} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/download" exact component={Download} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default memo(Routes);
