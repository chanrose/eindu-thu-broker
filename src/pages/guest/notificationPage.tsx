import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonIcon,
  IonPage,
} from "@ionic/react";
import "../../theme/components.css";
import { chatbubble, glasses, pencil, trash } from "ionicons/icons";
import HeaderComponent from "../../components/header";

const GNotificationPage: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>You're post have been approve</IonCardSubtitle>{" "}
          </IonCardHeader>
          <IonCardContent>
            Selling Home Estate 001
            <div className="ion-text-end">
              <IonButton fill="clear">
                <IonIcon icon={glasses}></IonIcon>
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard color="danger">
          <IonCardHeader>
            <IonCardSubtitle>You're post have been declined</IonCardSubtitle>{" "}
          </IonCardHeader>
          <IonCardContent>
            Selling Home Estate 001
            <div className="ion-text-end">
              <IonButton color="light" fill="clear">
                <IonIcon icon={chatbubble}></IonIcon>
              </IonButton>
              <IonButton color="light" fill="clear">
                <IonIcon icon={trash}></IonIcon>
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              You're post is being examine right now
            </IonCardSubtitle>{" "}
          </IonCardHeader>
          <IonCardContent>
            Selling Home Estate 001
            <div className="ion-text-end">
              <IonButton color="primary" fill="clear">
                <IonIcon icon={chatbubble}></IonIcon>
              </IonButton>
              <IonButton color="secondary" fill="clear">
                <IonIcon icon={pencil}></IonIcon>
              </IonButton>
              <IonButton color="danger" fill="clear">
                <IonIcon icon={trash}></IonIcon>
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GNotificationPage;
