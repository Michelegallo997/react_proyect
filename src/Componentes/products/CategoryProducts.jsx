import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebasetest';
import CardProducts from '../card/CardProducts';

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        console.log("Categoría recibida en URL:", categoryName);

        let q;
        
        if (categoryName.toLowerCase() === "zapatillas") {
          // Si la categoría es "Zapatillas", traemos TODOS los productos
          q = query(productsRef);
        } else {
          // Si es otra categoría, filtramos por ella
          q = query(productsRef, where('categories', 'array-contains', categoryName.toLowerCase()));
        }

        const querySnapshot = await getDocs(q);
        console.log("Productos encontrados:", querySnapshot.docs.length);

        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);
  
  if (loading) return <div className="text-center py-8">Cargando...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map(product => (
            <CardProducts
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              categories={product.categories} 
            />
          ))
        ) : (
          <p className="col-span-full text-center">No hay productos en esta categoría</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
