import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Redirect } from "react-router";
import "../theme/components.css";

interface props {
  hasBackBtn?: boolean;
}

const HeaderComponent: React.FC<props> = ({ hasBackBtn }) => {
  const directProfile = () => {
    console.log("Clicked on header");
    return <Redirect to="/my/profile" />;
  };
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">{hasBackBtn && <IonBackButton />}</IonButtons>
        <IonText className="ion-margin-start ">Hi, Mr. Khlain</IonText>
        <IonButton slot="end" fill="clear" routerLink="/my/profile">
          <IonAvatar>
            <img
              src="/assets/svg/khlain.jpg"
              alt="profile"
              height="40 px"
              className="header-profile"
            />
          </IonAvatar>
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderComponent;
