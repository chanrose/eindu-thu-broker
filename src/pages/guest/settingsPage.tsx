import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "../../theme/components.css";

const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};

const GSettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonText className="ion-margin-start ">Hi, Mr. Khlain</IonText>
          <IonAvatar slot="end">
            <img src="/assets/svg/placeholder.svg" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <div className="ion-text-center">
              <img src="/assets/logo.svg" alt="logo " height="250 px" />
            </div>
            <IonItem>FAQ</IonItem>
            <IonItem>Credits</IonItem>
            <IonItem>
              <IonLabel> Switch Theme</IonLabel>
              <IonToggle
                slot="end"
                name="darkMode"
                onIonChange={toggleDarkModeHandler}
              />
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonButton
          className="ion-margin-start ion-margin-end"
          color="danger"
          expand="block"
        >
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GSettingsPage;
