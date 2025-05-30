import { addDoc, collection, doc, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getProducts = async () => {
  const prodCollection = collection(db, "Productos");

  const productos = await getDocs(prodCollection);
  return productos.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
};

export const getProductsById = async (id) => {
  const prodDoc = doc(db, "Productos", id);
  const producto = await getDoc(prodDoc);
return {id: producto.id, ...producto.data()}

};
export const getbyCategory = async (category) => {
  const prodCollection = collection(db, "Productos");
const q = query(prodCollection, where('category', "==", category))
  const productos = await getDocs(q);
  return productos.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
};

export const createOrder = async newOrder =>{
 const orderCollection = collection(db, "Ordenes");
 const orderCreated = await addDoc(orderCollection, newOrder)

 return orderCreated
}

// Servicio para actualizar Stock
// writeBatch

export const createOrderAndUpdateStock = async (newOrder) =>{
    const batch = writeBatch(db)

const orderCreated = doc(collection(db, "Ordenes")) 
    batch.set(orderCreated, newOrder)

    newOrder.items.forEach(prod => {
       const producto = doc(db, "Productos", prod.id);
       batch.update(producto, {stock: prod.stock - prod.quantity})
    
    });
try {
    const commit = await batch.commit()
    console.log('commit', commit)
    return orderCreated
    
} catch (error) {
    
}
}
