// uploadProduct.js
import { db } from "./firebasetest";
import { collection, addDoc } from 'firebase/firestore';


export const uploadProductToFirebase = async () => { 
  try {
    const collectionProducts = collection(db, "products");
    for (const product of products) {
      await addDoc(collectionProducts, product);
      console.log("Producto subido correctamente");
    }
  } catch (error) {
    console.error("Error al subir el producto:", error);
  }
};

