import React, { memo } from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "./services/auth.service";

const ProtectedRoute = ({ component: Component, ...spread }) => {
  const accessAllowed = !!authService.getUser()?.token;

  return (
    <Route
      {...spread}
      render={(props) => {
        if (accessAllowed) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default memo(ProtectedRoute);
