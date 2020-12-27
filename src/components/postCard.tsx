import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonText,
  IonTextarea,
} from "@ionic/react";
import React from "react";

interface props {
  imagePath: string;
  postTitle: string;
  postSubtitle: string;
  postContent: string;
}
const PostCardComponent: React.FC<props> = ({
  imagePath,
  postTitle,
  postSubtitle,
  postContent,
}) => {
  return (
    <IonCard>
      <div className="ion-text-center">
        <img className="" src={imagePath} alt="placeholder" height="300 px" />
      </div>

      <IonCardHeader>
        <IonCardTitle>{postTitle}</IonCardTitle>
        <IonCardSubtitle>{postSubtitle}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText>{postContent}</IonText>

        <div className="ion-text-end">
          <IonButton routerLink={`/post/:id`} fill="clear">
            View Post
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default PostCardComponent;
