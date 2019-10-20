import React from "react";
import Layout from "./Hoc/layout.component";
import { Switch } from "react-router-dom";
import PrivateRoute from "./Components/auth-routes/private-routes.component";
import PublicRoute from "./Components/auth-routes/public-routes.component";

import Home from "./Components/home/home.component";
import SignIn from "./Components/sign-in/sign-in.component";
import TheTeam from "./Components/the-team/the-team.component";

import Dashboard from "./Components/admin/dashboard.component";
import AdminMatches from "./Components/admin/matches/admin-matches.component";
import AddEditMatch from "./Components/admin/matches/add-edit-match.component";
import AdminPlayers from "./Components/admin/players/admin-players.component";
import AddEditPlayers from "./Components/admin/players/add-edit-players.component";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_players/add_players"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players/add_players/:id"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match"
          exact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />

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
          path="/the_team"
          exact
          component={TheTeam}
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
