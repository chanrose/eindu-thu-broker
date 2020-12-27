import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonChip,
  IonContent,
  IonIcon,
  IonPage,
} from "@ionic/react";
import "../../theme/components.css";
import { pencil, trash } from "ionicons/icons";
import HeaderComponent from "../../components/header";

const GMessagePage: React.FC = () => {
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
                <IonIcon icon={pencil}></IonIcon>
              </IonButton>
              <IonButton color="danger" fill="clear">
                <IonIcon icon={trash}></IonIcon>
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
              <IonButton fill="clear">
                <IonIcon icon={pencil}></IonIcon>
              </IonButton>
              <IonButton color="danger" fill="clear">
                <IonIcon icon={trash}></IonIcon>
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>You're post have been approve</IonCardSubtitle>{" "}
          </IonCardHeader>
          <IonCardContent>
            Selling Home Estate 001
            <div className="ion-text-end">
              <IonButton fill="clear">
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

export default GMessagePage;
