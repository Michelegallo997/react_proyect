import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebasetest';
import CardProducts from '../card/CardProducts';
import Loader from '../products/Loader';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('q')?.toLowerCase().trim() || '';
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (!searchTerm) {
          setProducts([]);
          setLoading(false);
          return;
        }

        const productsRef = collection(db, 'products');
        
        // Búsqueda por palabras clave en el título
        const titleQuery = query(
          productsRef,
          where('keywords', 'array-contains', searchTerm)
        );

        // Búsqueda por categorías
        const categoryQuery = query(
          productsRef,
          where('categories', 'array-contains', searchTerm)
        );

        // Ejecutar ambas consultas en paralelo
        const [titleSnapshot, categorySnapshot] = await Promise.all([
          getDocs(titleQuery),
          getDocs(categoryQuery)
        ]);

        // Combinar resultados y eliminar duplicados
        const combinedResults = [
          ...titleSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
          ...categorySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        ].filter((product, index, self) =>
          index === self.findIndex(p => p.id === product.id)
        );

        setProducts(combinedResults);
        setError(null);
      } catch (err) {
        console.error("Error en la búsqueda:", err);
        setError("Error al cargar los resultados de búsqueda");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchTerm]);

  if (loading) {
    return <Loader message="Buscando productos..." />;
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4 text-center text-red-500">
        {error}
      </div>
    );
  }

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
          <div className="col-span-full text-center text-gray-600">
            {searchTerm ? 
              "No se encontraron productos que coincidan con tu búsqueda" : 
              "Ingresa un término de búsqueda en la barra superior"}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;