import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import CardProducts from '../card/CardProducts';
import {db} from '../../firebasetest';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('q')?.toLowerCase() || '';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        
      
        const titleQuery = query(
          productsRef,
          where('keywords', 'array-contains', searchTerm)
        );

        const categoryQuery = query(
          productsRef,
          where('categories', 'array-contains', searchTerm)
        );

        const [titleSnapshot, categorySnapshot] = await Promise.all([
          getDocs(titleQuery),
          getDocs(categoryQuery)
        ]);

       
        const combinedProducts = [
          ...titleSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
          ...categorySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        ].filter((product, index, self) =>
          index === self.findIndex(p => p.id === product.id)
        );

        setProducts(combinedProducts);
      } catch (error) {
        console.error("Error buscando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchProducts();
    }
  }, [searchTerm]);

  if (loading) return <div className="text-center py-8">Buscando...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Resultados para: "{searchTerm}"
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
          <p className="col-span-full text-center">No se encontraron productos</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;