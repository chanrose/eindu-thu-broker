import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "../../theme/components.css";

const GPostListPage: React.FC = () => {
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
              <IonButton fill="clear">View post</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <img src="/assets/svg/placeholder.svg" />
          </IonCardHeader>
          <IonCardContent>
            Post Request Status
            <div className="ion-text-end">
              <IonButton fill="clear">View post</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <img src="/assets/svg/placeholder.svg" />
          </IonCardHeader>
          <IonCardContent>
            Post Request Status
            <div className="ion-text-end">
              <IonButton fill="clear">View post</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GPostListPage;
