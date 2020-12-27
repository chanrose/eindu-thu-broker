import React from "react";
import {
  IonAvatar,
  IonButton,
  IonChip,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
} from "@ionic/react";
import "../../theme/components.css";
import HeaderComponent from "../../components/header";
import PostCardComponent from "../../components/postCard";
import { send } from "ionicons/icons";
import "../../theme/components.css";

const GPostEntryPage: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent hasBackBtn={true} />
      <IonContent fullscreen>
        <PostCardComponent
          imagePath={"/assets/svg/interiorTemplate02.jpg"}
          postTitle="Interior 001"
          postSubtitle="150,000 Baht"
          postContent="House 001 located near village template 003"
        />
        <div className="ion-padding">
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
          <IonRow>
            <IonCol>
              <IonChip className="ion-margin-top comment-style" color="primary">
                <IonInput type="text" placeholder="write a comment" />
              </IonChip>
            </IonCol>
            <IonCol>
              <IonButton className="ion-margin-top" fill="clear" size="small">
                <IonIcon icon={send} />
              </IonButton>
            </IonCol>
          </IonRow>
        </div>
        <div className="ion-margin-bottom"></div>
      </IonContent>
    </IonPage>
  );
};

export default GPostEntryPage;
