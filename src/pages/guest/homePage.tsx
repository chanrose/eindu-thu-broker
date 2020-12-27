import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/react";
import "../../theme/components.css";
import HeaderComponent from "../../components/header";
const GHomePage: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent />
      <IonContent fullscreen>
        <IonCard color="primary">
          <IonCardHeader>
            <div className="ion-text-center">
              <IonCardSubtitle>Quick Find</IonCardSubtitle>
              <IonCardTitle>Search</IonCardTitle>
            </div>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonLabel>Select Province</IonLabel>
              <IonSelect placeholder="Select one">
                <IonSelectOption>A</IonSelectOption>
              </IonSelect>
            </IonItem>
            <div className="ion-text-end">
              <IonButton fill="clear">Find</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard color="primary">
          <div className="ion-text-center">
            <IonCardTitle>
              {" "}
              <h2>Pick Category</h2>
            </IonCardTitle>
          </div>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonText>
              <div className="ion-text-center">
                <IonChip>Apartment</IonChip>
                <IonChip>Home</IonChip>
                <IonChip>Building</IonChip>
                <IonChip>Land</IonChip>
                <IonChip>Renting</IonChip>
              </div>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GHomePage;
