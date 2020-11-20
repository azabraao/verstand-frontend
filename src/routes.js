import React, { memo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Download from "./pages/Download";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sleeve from "./pages/Sleeve";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import ProtectedRoute from "./protected.route";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <ProtectedRoute path="/upload" exact component={Upload} />
          <ProtectedRoute path="/sleeve" exact component={Sleeve} />
          <ProtectedRoute path="/download" exact component={Download} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default memo(Routes);
