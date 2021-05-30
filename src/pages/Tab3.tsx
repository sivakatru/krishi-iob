import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonLabel, IonList, IonCard, IonItem, IonButton } from '@ionic/react';
import './Tab3.css';
import {useState, useEffect} from 'react';
import firebase from  '../firebaseConfig';

const Tab3: React.FC = () => {

  const [docs, setDocs] = useState([]);
  const [setState] = useState([]);

  const Approve = (ev:any) => {
    console.log('approve tx: ', ev);
  }

  async function useFirestore(collection: any) {

    useEffect(()=>{
        const unsub = firebase.firestore().collection(collection).onSnapshot((snap)=>{
            let documents = [] as any;
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents);
        });

        return () => unsub();
    }, [collection]); 
    
    return {docs};
  }
   
  const items  =  useFirestore("Products");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Approvals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="img-grid">
          {docs && docs.map ((doc: any) => {
            return <IonCard  key={doc.id} className="product-card">
                    <IonItem className="product-img">
                      <img src={doc.ProductURL} alt="Product pic" />
                    </IonItem>
                    <IonItem>
                      <IonLabel>Blockchain State:</IonLabel>
                      <IonButton onClick={ ()=>Approve(doc.id) }>Approve</IonButton>
                    </IonItem>               
                    <IonItem>
                      <IonLabel>Hash:</IonLabel>
                      <p>{doc.id}</p>
                    </IonItem>
                    <IonItem><h2>{doc.ProductName}</h2></IonItem>
                    <IonItem><p>{doc.ProductDesc}</p></IonItem>
                    <IonItem><p>{doc.ProductOrigin}</p></IonItem>
                    <IonItem><p>{doc.ProductQty} Kg</p></IonItem>
                    <IonItem><h2>{doc.ProductPrice} INR</h2> </IonItem>
                  </IonCard>
          })} 
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
