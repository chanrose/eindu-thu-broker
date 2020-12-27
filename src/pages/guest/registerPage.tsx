import React, { useState } from "react";
import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../../theme/components.css";
import HeaderComponent from "../../components/header";
const GRegisterPage: React.FC = () => {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ loading: false, error: false });
  const [errorMessage, setErr] = useState("");
  const handleLogin = async () => {
    // try {
    //   setStatus({ loading: true, error: false });
    //   const credential = await auth.signInWithEmailAndPassword(
    //     userDetail.email,
    //     userDetail.password
    //   );
    // } catch (error) {
    //   setErr(error.message!);
    //   setStatus({ loading: false, error: true });
    //   console.log(error);
    // }
  };

  return (
    <IonPage>
      {status.loading && (
        <div>
          <IonAlert isOpen={status.loading} message={`Loading ...`} />
        </div>
      )}
      {status.error && (
        <IonAlert
          isOpen={status.error}
          onDidDismiss={() => setStatus({ error: false, loading: false })}
          header={"Login failed"}
          message={`${errorMessage}`}
          buttons={["OK"]}
        />
      )}
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">Registeration </div>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonCard>
          <IonCardHeader color="dark">
            <div className="ion-text-center">
              <img
                src="/assets/logo.svg"
                alt="login illustration"
                height="150 px"
              />
            </div>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonInput
                value={userDetail.email}
                onIonChange={(e) =>
                  setUserDetail({
                    email: e.detail.value!,
                    password: userDetail.password,
                  })
                }
                type="text"
                placeholder="forcess97@gmail.com"
              />
            </IonItem>
            <IonItem>
              <IonInput
                value={userDetail.password}
                onIonChange={(e) =>
                  setUserDetail({
                    email: userDetail.email,
                    password: e.detail.value!,
                  })
                }
                type="password"
                placeholder="*******"
              />
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonButton
          color="dark"
          onClick={handleLogin}
          className="ion-margin-start ion-margin-end"
          expand="block"
        >
          SIGNUP
        </IonButton>
        <IonButton
          routerLink="/login"
          className="ion-margin-start ion-margin-end"
          fill="clear"
          expand="full"
          color="dark"
        >
          ALREADY HAVE ACCOUNT?
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GRegisterPage;
