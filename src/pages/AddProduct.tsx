import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonFabButton, IonCard, IonTextarea } from '@ionic/react';
import React, { useRef, useState } from 'react';
import firebase from '../firebaseConfig';

const AddProduct: React.FC = () => {

    const [productName, setProductName] = useState<string>(); 
    const [productDesc, setProductDesc] = useState<string>();
    const [productOrigin, setProductOrigin] = useState<string>();
    const [productQty, setProductQty] = useState();
    const [productPrice, setProductPrice] = useState();
    const [setProductImg] = useState();
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg']; // image types

    interface InternalValues {
        file: any
    }
    const values = useRef<InternalValues>({file: false});

    const onFileChange = (e:any) => {
        if (e.target.files[0] && types.includes(e.target.files[0].type)) {
            values.current.file = e.target.files[0];
            setError('');
        }
        else {
            setError('Please select a valid image type (jpg or png)');
        }
    }

    const addProduct = (e:any) => {
        console.log("adding products");
        let file = values.current.file;
        console.log(file, file.name);
        let uploadTask = firebase.storage().ref(`product-images/${file.name}`).put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
                
                let url = uploadTask.snapshot.downloadURL;
        } , err => setError(err.message),
        () => {
            firebase.storage().ref('product-images').child(file.name).getDownloadURL().then( (url) => {
                firebase.firestore().collection('Products').add({
                    ProductName: productName,
                    ProductDesc: productDesc,
                    ProductOrigin: productOrigin,
                    ProductQty: Number(productQty),
                    ProductPrice: Number(productPrice),
                    ProductURL: url
                }).then(()=>{
                    setProductName('');
                    setProductDesc('');
                    setProductOrigin('');
                    setError('');
                })
            })
        }
        
        )
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Marketplace</IonTitle>
        </IonToolbar>
      </IonHeader>
    
        <IonContent className="ion-padding">
            <form autoComplete="off" onSubmit={addProduct}>
                <IonList>
                    <IonItem>
                        <IonInput id="productName" onIonChange={(e:any)=> {setProductName(e.target.value)}} value={productName} placeholder="Product/Crop/Item Name"/>
                    </IonItem>
                    <IonItem>
                        <IonTextarea id="productDesc" onIonChange={(e:any)=> {setProductDesc(e.target.value)}} value={productDesc} placeholder="Product Description"/>
                    </IonItem>
                    <IonItem>
                        <IonInput id="productOrigin" onIonChange={(e:any)=> {setProductOrigin(e.target.value)}} value={productOrigin} placeholder="Product Origin"/>
                    </IonItem>
                    <IonItem>
                        <IonInput id="productQty" onIonChange={(e:any)=> {setProductQty(e.target.value)}} value={productQty} placeholder="Product Quantity(Kg)"/>
                    </IonItem>  
                    <IonItem>
                        <IonInput id="productPrice" onIonChange={(e:any)=> {setProductPrice(e.target.value)}} value={productPrice} placeholder="Product Price"/>
                    </IonItem>                    
                    <IonItem>
                        <IonLabel position="floating">Choose currency</IonLabel>
                        <IonSelect>
                        <IonSelectOption value="inr">INR</IonSelectOption>
                        <IonSelectOption id="dot">Dot</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                    <IonLabel position="stacked">Product Image</IonLabel>
                        <input type="file" required id="file" onChange={(e) => onFileChange(e)} placeholder="Display Image"/>
                    </IonItem>
                    <IonButton expand="block" color="primary" onClick={(e) => { addProduct(e)}}>Add Product</IonButton>        
                </IonList>
            </form> 
            {error && <span className='error-msg'>{error}</span>}       
        </IonContent>            

    </IonPage>
  );
};

export default AddProduct;
