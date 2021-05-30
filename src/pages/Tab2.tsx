import { IonContent, IonFabButton, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonIcon, IonFooter, IonButton, IonFab, IonList, IonCard } from '@ionic/react';
import './Tab2.css';
import { add, heartDislike, heart } from 'ionicons/icons';
import {useState, useEffect} from 'react';
import firebase from  '../firebaseConfig';



const Tab2: React.FC = () => {
  
  const [docs, setDocs] = useState([]);

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
          <IonTitle>Marketplace</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="img-grid">
          {docs && docs.map ((doc: any) => {
            return <IonCard  key={doc.id} className="product-card">
                    <IonItem className="product-img">
                      <img src={doc.ProductURL} alt="Product pic" />
                    </IonItem>
                    <IonItem>Blockchain Verified: {(!doc.ProductState)?<IonIcon icon={heartDislike}/>:<IonIcon icon={heart}/>}</IonItem>
                    <IonItem><h2>{doc.ProductName}</h2></IonItem>
                    <IonItem><p>{doc.ProductDesc}</p></IonItem>
                    <IonItem><p>{doc.ProductOrigin}</p></IonItem>
                    <IonItem><p>{doc.ProductQty} Kg</p></IonItem>
                    <IonItem><h2>{doc.ProductPrice} INR</h2> </IonItem>
                  </IonCard>
          })} 
        </IonList>

        
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton routerLink="/addProduct"><IonIcon icon={add}/></IonFabButton>
      </IonFab>

      </IonContent>

    </IonPage>
  );

};

export default Tab2;
