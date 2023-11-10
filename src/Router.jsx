import { useContext } from "react";
import { Route, Switch } from 'wouter';
import { Button } from "@tremor/react";
import { MessageCard } from "./components/message-card";
import { Index } from "./components";

import { AuthContext } from "./context/auth";
import { Login } from "./components/user/login";
// import { ROLES } from "./constants";

export const Router = () => {
    const { state, handleLogout } = useContext(AuthContext);
    const { isAuthenticated, user } = state;
    return (
      <Switch>
        <Route path="/">
            <Index />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/releases">
            <h1>Releases</h1>
            <Button>Volver</Button>
        </Route>

        <Route path="/artists">
            <h1>Artists</h1>
            <Button>Volver</Button>
        </Route>

        <Route>
          <MessageCard message="404 - Not Found" />
        </Route>
      </Switch>
    );
  };
  