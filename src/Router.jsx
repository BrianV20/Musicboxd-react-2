import { useContext } from "react";
import { Route, Switch } from 'wouter';
import { Button } from "@tremor/react";
import { MessageCard } from "./components/message-card";
import { Index } from "./components";

import { AuthContext } from "./context/auth";
import { Login } from "./components/user/login";
import { Artist } from "./components/artist/artist";
import { CreateUser } from "./components/user/register";
import { Release } from "./components/release/release";
import { ReleaseById } from "./components/release/releaseById";
import { ArtistById } from "./components/artist/artistById";

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
        
        <Route path="/releases/:id" component={ReleaseById} />

        <Route path="/releases">
            <Release/>
        </Route>


        <Route path="/register">
            <CreateUser/>
        </Route>

        <Route path="/artists/:id" component={ArtistById} />

        <Route path="/artists">
            <Artist/>
        </Route>

        <Route>
          <MessageCard message="404 - Not Found" />
        </Route>
      </Switch>
    );
  };
  