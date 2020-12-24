import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "../../theme/components.css";
import { pencil, trash } from "ionicons/icons";

const GMessagePage: React.FC = () => {
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
          <IonCardHeader>
            <img src="/assets/svg/placeholder.svg" />
          </IonCardHeader>
          <IonCardContent>
            Post Request Status
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
        <IonChip>
          <IonAvatar>
            <img src="/assets/svg/placeholder.svg" />
          </IonAvatar>
          <p>Chat Testing Placeholder </p>
        </IonChip>
        <IonRow>
          <IonCol>
            <div className="ion text-end">
              <IonChip>
                <IonAvatar>
                  <img src="/assets/svg/placeholder.svg" />
                </IonAvatar>
                <p>Chat Testing Placeholder </p>
              </IonChip>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default GMessagePage;
