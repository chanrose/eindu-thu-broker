import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { chatbubble, home, list, settings } from "ionicons/icons";
import GHomePage from "./pages/guest/homePage";
import GPostListPage from "./pages/guest/postListPage";
import GMessagePage from "./pages/guest/messagePage";
import GSettingsPage from "./pages/guest/settingsPage";
import GPostEntryPage from "./pages/guest/postEntryPage";

const GuestAppTabs: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={GHomePage} exact={true} />
        <Route path="/posts" component={GPostListPage} exact={true} />
        <Route path="/post/:id" component={GPostEntryPage} exact={true} />
        <Route path="/messages" component={GMessagePage} exact={true} />
        <Route path="/settings" component={GSettingsPage} />
        <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="posts" href="/posts">
          <IonIcon icon={list} />
          <IonLabel>Post List</IonLabel>
        </IonTabButton>
        <IonTabButton tab="messages" href="/messages">
          <IonIcon icon={chatbubble} />
          <IonLabel>Message</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings">
          <IonIcon icon={settings} />
          <IonLabel>Setting</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default GuestAppTabs;
