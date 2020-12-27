import { IonAvatar, IonHeader, IonText, IonToolbar } from "@ionic/react";
import React from "react";
import "../theme/components.css";
const HeaderComponent = () => {
  return (
    <IonHeader>
      <IonToolbar>
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
