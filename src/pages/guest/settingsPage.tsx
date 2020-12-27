import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonToggle,
} from "@ionic/react";
import "../../theme/components.css";
import HeaderComponent from "../../components/header";

const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};

const GSettingsPage: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent />
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <div className="ion-text-center">
              <img src="/assets/logo.svg" alt="logo " height="250 px" />
            </div>
            <IonItem>FAQ</IonItem>
            <IonItem>Credits</IonItem>
            <IonItem>Feedback</IonItem>
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
