import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonHeader,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "../theme/components.css";

interface props {
  hasBackBtn?: boolean;
}

const HeaderComponent: React.FC<props> = ({ hasBackBtn }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">{hasBackBtn && <IonBackButton />}</IonButtons>
        <IonText className="ion-margin-start ">Hi, Mr. Khlain</IonText>
        <IonAvatar slot="end">
          <img
            src="/assets/svg/khlain.jpg"
            alt="profile"
            height="40 px"
            className="header-profile"
          />
        </IonAvatar>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderComponent;
