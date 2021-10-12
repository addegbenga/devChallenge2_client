import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingPage from "../layout/Loading";

export function PrivateRoutes({ component: Component, ...rest }) {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const pageloading = useSelector((state) => state.auth.pageloading);
  return (
    <Route
      {...rest}
      render={(props) =>
        pageloading ? (
          <LoadingPage />
        ) : isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
