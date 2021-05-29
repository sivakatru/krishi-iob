import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonFabButton, IonCard } from '@ionic/react';
import React, { useState } from 'react';
import './Tab1.css';
import Icon from '../assets/icon/favicon.png';
import { setTokenSourceMapRange } from 'typescript';


const Tab1: React.FC = () => {
  const [token, setToken] = useState<string>();
  const Login = () => {console.info("Call REST API for Login with token: ", token)};
  const Register = () => {console.info("Call REST API for Register")};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Welcome to krishi-IoB</IonTitle>
        </IonToolbar>
      </IonHeader>
    
      <IonContent className="ion-padding">
        <IonCard className="ion-padding">
          <IonItem>
            <img src={Icon} alt="icon here" />
            <p><b>krishi-IoB</b> <br></br>The Blockchain Platform for Agriculture</p>
          </IonItem>

          <IonList>
              <IonItem>
                <IonLabel position="stacked">Already a member</IonLabel>
                <IonInput id="token" onIonChange={(e:any)=> {setToken(e.target.value)}} value={token} placeholder="Enter or Paste your identity token here"> </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Remember me</IonLabel>
                <IonCheckbox defaultChecked={false} slot="start" />
              </IonItem>

              <IonButton className="ion-margin-top" type="submit" expand="block" onClick={ () => Login() }>Let's go</IonButton>

          </IonList>
        </IonCard>
        <div id="result"></div>


        <IonCard className="ion-padding"> 
          <IonLabel position="stacked">Become a member</IonLabel>
          <IonButton expand="block" color="secondary" routerLink="register">Join Us</IonButton>

          <IonItem href="https://krishi-iob.blogspot.com/">
              <IonLabel>
                Know more [<u>link</u>] 
              </IonLabel>
          </IonItem>
        </IonCard>
        
      </IonContent>   
             

    </IonPage>
  );
};

export default Tab1;
