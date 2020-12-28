import React, { useState } from "react";
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonPopover,
  IonText,
  IonTextarea,
  IonToolbar,
} from "@ionic/react";
import "../../theme/components.css";
import PostCardComponent from "../../components/postCard";
import { ellipsisVerticalSharp, send } from "ionicons/icons";
import "../../theme/components.css";

const GMessageEntryPage: React.FC = () => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <div className="ion-text-center">
            <IonText>Online </IonText>
          </div>
          <IonButton
            fill="clear"
            slot="end"
            onClick={(e: any) => {
              e.persist();
              setShowPopover({ showPopover: true, event: e });
            }}
          >
            <IonIcon icon={ellipsisVerticalSharp} />
          </IonButton>
          <IonPopover
            event={popoverState.event}
            isOpen={popoverState.showPopover}
            onDidDismiss={() =>
              setShowPopover({ showPopover: false, event: undefined })
            }
          >
            <IonItem>
              <IonText color="danger">Report user</IonText>
            </IonItem>
          </IonPopover>
        </IonToolbar>
      </IonHeader>
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
          {/* <IonRow>
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
          </IonRow> */}
        </div>
        <div className="ion-margin-bottom"></div>
        <IonItem></IonItem>
        <IonItem>
          <IonTextarea placeholder="Message ..."></IonTextarea>
          <IonButton className="ion-margin-top" slot="end" fill="clear">
            <IonIcon icon={send} />
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default GMessageEntryPage;
