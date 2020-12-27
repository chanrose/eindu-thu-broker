import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonContent,
  IonIcon,
  IonPage,
} from "@ionic/react";
import "../../theme/components.css";
import { pencil, trash } from "ionicons/icons";
import HeaderComponent from "../../components/header";
import PostCardComponent from "../../components/postCard";

const GPostEntryPage: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent />
      <IonContent fullscreen>
        <PostCardComponent
          imagePath={"/assets/svg/interiorTemplate02.jpg"}
          postTitle="Interior 001"
          postSubtitle="150,000 Baht"
          postContent="House 001 located near village template 003"
        />
        <IonChip className="">
          <IonAvatar>
            <img src="/assets/svg/placeholder.svg" alt="avatar" />
          </IonAvatar>
          <p>
            Hello there, this is Eidu Agent, <br />
            we need some more info
          </p>
        </IonChip>

        <div className="ion-text-end">
          <IonChip>
            <IonAvatar>
              <img src="/assets/svg/khlain.jpg" alt="avatar" />
            </IonAvatar>
            <p>What are the documents that I need? </p>
          </IonChip>
        </div>
        <div className="ion-text-end">
          <IonChip>
            <IonAvatar>
              <img src="/assets/svg/khlain.jpg" alt="avatar" />
            </IonAvatar>
            <p>What are the documents that I need? </p>
          </IonChip>
        </div>
        <IonChip className="">
          <IonAvatar>
            <img src="/assets/svg/placeholder.svg" alt="avatar" />
          </IonAvatar>
          <p>
            Hello there, this is Eidu Agent, <br />
            we need some more info
          </p>
        </IonChip>
      </IonContent>
    </IonPage>
  );
};

export default GPostEntryPage;
