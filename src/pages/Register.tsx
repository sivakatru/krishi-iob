import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonFabButton, IonCard } from '@ionic/react';
import React, { useState } from 'react';
import Icon from '../assets/icon/favicon.png';

const Register: React.FC = () => {
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

          <IonItem>
            <IonLabel position="floating">Choose your role</IonLabel>
            <IonSelect>
              <IonSelectOption value="farmer">Farmer</IonSelectOption>
              <IonSelectOption id="regulator">Regulatory Authority</IonSelectOption>
              <IonSelectOption id="govt">Govt Body</IonSelectOption>
              <IonSelectOption id="middlemen">Middle Men</IonSelectOption>
              <IonSelectOption id="consumer">Consumer</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
              <IonInput placeholder="Nick name or alias on the Blockchain"></IonInput>
          </IonItem>
          <IonButton expand="block" color="primary" onClick={ () => Register() }>Join Us</IonButton>        
        </IonCard>
        
        <IonCard className="ion-padding"> 
          <IonLabel position="stacked">Already a member?</IonLabel>
          <IonButton expand="block" color="secondary" routerLink="tab1">Let's go</IonButton>        
        </IonCard>
        
        </IonContent>            

    </IonPage>
  );
};

export default Register;
