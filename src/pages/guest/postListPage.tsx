import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
  IonTextarea,
} from "@ionic/react";
import "../../theme/components.css";
import HeaderComponent from "../../components/header";
import PostCardComponent from "../../components/postCard";

const GPostListPage: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent />
      <IonContent fullscreen>
        {/* <IonButton className="ion-margin-start ion-margin-end" expand="block">
          Add Post
        </IonButton> */}
        <IonCard color="light">
          <img
            className="ion-margin-start ion-margin-top"
            src="/assets/svg/placeholder.svg"
            alt="place holder"
            height="50 px"
          />
          <IonCardHeader>
            <IonCardTitle>Esate Name</IonCardTitle>
            <IonCardSubtitle>Estate price</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonTextarea>Enter the description</IonTextarea>

            <div className="ion-text-end">
              <IonButton fill="clear">Post</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
        <PostCardComponent
          imagePath={"/assets/svg/houseTemplate01.jpg"}
          postTitle="House 001"
          postSubtitle="50,000 Baht"
          postContent="House 001 located near village template 001"
        />
        <PostCardComponent
          imagePath={"/assets/svg/interiorTemplate01.jpg"}
          postTitle="Interior 001"
          postSubtitle="150,000 Baht"
          postContent="House 001 located near village template 002"
        />
        <PostCardComponent
          imagePath={"/assets/svg/interiorTemplate02.jpg"}
          postTitle="Interior 001"
          postSubtitle="150,000 Baht"
          postContent="House 001 located near village template 003"
        />
      </IonContent>
    </IonPage>
  );
};

export default GPostListPage;
