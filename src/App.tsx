import React from "react";
import { IonApp } from "@ionic/react";

import GuestAppTabs from "./GuestAppTabs";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Switch } from "react-router";
import GLoginPage from "./pages/guest/loginPage";
import GRegisterPage from "./pages/guest/registerPage";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Switch>
        <Route path="/login">
          <GLoginPage />
        </Route>
        <Route path="/register">
          <GRegisterPage />
        </Route>
        <Route path="/my">
          <GuestAppTabs />
        </Route>
        <Route>
          <GLoginPage />
        </Route>
      </Switch>
    </IonReactRouter>
  </IonApp>
);

export default App;
