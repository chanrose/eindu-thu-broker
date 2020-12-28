import React from "react";
import {
  IonAvatar,
  IonBadge,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import "../../theme/components.css";
import HeaderComponent from "../../components/header";

const GMessagePage: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent />
      <IonContent className="ion-padding" fullscreen>
        {/* <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Estate No 001</IonCardSubtitle>{" "}
          </IonCardHeader>
          <IonCardContent>
            <IonItem lines="none">
              <IonLabel>Selling Home Estate 001</IonLabel>
              <IonAvatar slot="start">
                <img src="assets/svg/khlain.jpg" alt="avatar" />
              </IonAvatar>
            </IonItem>
          </IonCardContent>
        </IonCard> */}

        <IonItem lines="none" routerLink="/my/message/:id">
          <IonLabel>
            Estate 001 <br />
            Selling home apartment
          </IonLabel>
          <IonBadge slot="end">11</IonBadge>
          <IonAvatar slot="start">
            <img src="assets/svg/khlain.jpg" alt="avatar" />
          </IonAvatar>
        </IonItem>
        <IonItem
          lines="none"
          className="ion-margin-top"
          routerLink="/my/message/:id"
        >
          <IonLabel>Renting Template Estate 002</IonLabel>
          <IonBadge slot="end">71</IonBadge>
          <IonAvatar slot="start">
            <img src="assets/svg/houseTemplate01.jpg" alt="avatar" />
          </IonAvatar>
        </IonItem>
        <IonItem
          lines="none"
          className="ion-margin-top"
          routerLink="/my/message/:id"
        >
          <IonLabel>Buying Home Estate 002</IonLabel>
          <IonBadge slot="end">1</IonBadge>
          <IonAvatar slot="start">
            <img src="assets/svg/interiorTemplate01.jpg" alt="avatar" />
          </IonAvatar>
        </IonItem>
        <IonItem
          lines="none"
          className="ion-margin-top"
          routerLink="/my/message/:id"
        >
          <IonLabel>Designing Template Estate 022</IonLabel>
          <IonBadge slot="end">5</IonBadge>
          <IonAvatar slot="start">
            <img src="assets/svg/interiorTemplate02.jpg" alt="avatar" />
          </IonAvatar>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default GMessagePage;
