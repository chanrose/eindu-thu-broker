import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { chatbubble, home, notifications, settings } from "ionicons/icons";
import GPostListPage from "./pages/guest/postListPage";
import GMessagePage from "./pages/guest/messagePage";
import GSettingsPage from "./pages/guest/settingsPage";
import GPostEntryPage from "./pages/guest/postEntryPage";
import GNotificationPage from "./pages/guest/notificationPage";
import GMessageEntryPage from "./pages/guest/messageEntryPage";
import GProfilePage from "./pages/guest/profilePage";

const GuestAppTabs: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Switch>
          <Route path="/my/home" component={GPostListPage} exact={true} />
          <Route path="/my/posts" component={GPostListPage} exact={true} />
          <Route path="/my/post/:id" component={GPostEntryPage} exact={true} />
          <Route
            path="/my/notification"
            component={GNotificationPage}
            exact={true}
          />
          <Route path="/my/messages" component={GMessagePage} exact={true} />
          <Route
            path="/my/message/:id"
            component={GMessageEntryPage}
            exact={true}
          />
          <Route path="/my/profile" component={GProfilePage} exact={true} />

          <Route path="/my/settings" component={GSettingsPage} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          <Route>
            <GPostListPage />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/my/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        {/* <IonTabButton tab="posts" href="/posts">
          <IonIcon icon={list} />
          <IonLabel>Post List</IonLabel>
        </IonTabButton> */}
        <IonTabButton tab="messages" href="/my/messages">
          <IonIcon icon={chatbubble} />
          <IonLabel>Message</IonLabel>
        </IonTabButton>
        <IonTabButton tab="notification" href="/my/notification">
          <IonIcon icon={notifications} />
          <IonLabel>Notification</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/my/settings">
          <IonIcon icon={settings} />
          <IonLabel>Setting</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default GuestAppTabs;
