import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonItem,
  IonPage,
} from "@ionic/react";
import "../../theme/components.css";
import HeaderComponent from "../../components/header";

const GProfilePage: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <div className="ion-text-center ion-margin-top">
              <img
                className="profile-avatar"
                src="/assets/svg/khlain.jpg"
                alt="logo "
              />
            </div>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>Your Fullname</IonItem>
            <IonItem>Your Phone Number</IonItem>
            <IonItem>Email</IonItem>
            <IonItem>Change Email</IonItem>
            <IonItem>Change Password</IonItem> <IonItem>Delete account</IonItem>
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

export default GProfilePage;
