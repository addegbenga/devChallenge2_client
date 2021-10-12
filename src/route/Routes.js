import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import EditProfile from "../dashboard/EditProfile";
import Profile from "../dashboard/Profile";
import {PrivateRoutes} from "../route/PrivateRoutes"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Register} />
      <PrivateRoutes exact path="/profile" component={Profile} />
      <PrivateRoutes exact path="/edit" component={EditProfile} />
    </Switch>
  );
}
