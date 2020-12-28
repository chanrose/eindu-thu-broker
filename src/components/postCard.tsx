import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSlide,
  IonSlides,
  IonText,
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
      <IonSlides>
        <IonSlide>
          <div className="ion-text-center">
            <img
              className=""
              src={imagePath}
              alt="placeholder"
              height="300 px"
            />
          </div>
        </IonSlide>
        <IonSlide>
          <div className="ion-text-center">
            <img
              className=""
              src={"/assets/svg/interiorTemplate02.jpg"}
              alt="placeholder"
              height="300 px"
            />
          </div>
        </IonSlide>
        <IonSlide>
          <div className="ion-text-center">
            <img
              className=""
              src={"/assets/svg/interiorTemplate01.jpg"}
              alt="placeholder"
              height="300 px"
            />
          </div>
        </IonSlide>
        <IonSlide>
          <div className="ion-text-center">
            <img
              className=""
              src={"/assets/svg/houseTemplate01.jpg"}
              alt="placeholder"
              height="300 px"
            />
          </div>
        </IonSlide>
      </IonSlides>

      <IonCardHeader>
        <IonCardTitle>{postTitle}</IonCardTitle>
        <IonCardSubtitle>{postSubtitle}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText>{postContent}</IonText>

        <div className="ion-text-end">
          <IonButton routerLink={`/my/message/:id`} fill="clear">
            Contact Now
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default PostCardComponent;
