import React from "react";
import Layout from "./Hoc/layout.component";
import { Switch } from "react-router-dom";
import PrivateRoute from "./Components/auth-routes/private-routes.component";
import PublicRoute from "./Components/auth-routes/public-routes.component";

import Home from "./Components/home/home.component";
import SignIn from "./Components/sign-in/sign-in.component";
import Dashboard from "./Components/admin/dashboard.component";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PublicRoute
          {...props}
          restricted={true}
          path="/sign_in"
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
