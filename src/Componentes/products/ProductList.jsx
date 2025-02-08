import { useEffect, useState } from "react";
import {collection, getDocs} from "firebase/firestore";
import { db } from "../../firebasetest";
import CardProducts from "../card/CardProducts";

function ProductList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchProducts = async () => {
        try{
            const productsCollection = collection(db, "products");

            const querySnapshot = await getDocs(productsCollection);

            const productsData = querySnapshot.docs.map((doc) => ({
                id : doc.id,
                ...doc.data(),
        }));
        
        setProducts(productsData);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchProducts();
}, []);

if (loading) return <p>Loading...</p>;

return(
    <div className="products_type grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
            <CardProducts key={product.id} 
                          id={product.id} 
                          imageUrl={product.imageUrl}
                          title={product.title}
                           />))}
    </div>
        
);
}

export default ProductList;
