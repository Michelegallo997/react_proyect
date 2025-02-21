import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebasetest";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartError, setCartError] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const docSnap = await getDoc(productRef);

        if (!docSnap.exists()) {
          throw new Error("Producto no encontrado");
        }

        const productData = {
          id: docSnap.id,
          ...docSnap.data()
        };

        if (productData.sizes && productData.sizes.length > 0) {
          setSelectedSize(productData.sizes[0]);
        }

        setProduct(productData);
        setError(null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) {
      setCartError(true);
      return;
    }

    try {
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl || "https://via.placeholder.com/150",
        selectedSize,
        stock: product.stock, 
      };

      addToCart(cartItem);
      setCartError(false); 
    } catch (error) {
      console.error("Error añadiendo al carrito:", error);
      setCartError(true); 
    }
  };

  if (loading) {
    return <Loader message="Cargando detalles del producto..." />;
  }

  if (error) {
    return (
      <ErrorMessage 
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
        onClick={() => navigate(-1)}
      >
        ← Volver a productos
      </button>

      {cartError && (
        <p className="text-red-500 text-sm mt-2">⚠️ Error: No se pudo añadir al carrito.</p>
      )}
      
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-4 gap-6">
        <div className="w-full lg:w-1/2">
          <img
            src={product.imageUrl || "https://via.placeholder.com/150"}
            alt={product.title}
            className="w-full h-96 object-contain rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-green-600">
              ${product.price}
            </span>
            {product.stock > 0 ? (
              <span className="text-sm text-green-500 bg-green-100 px-2 py-1 rounded">
                En stock ({product.stock} unidades)
              </span>
            ) : (
              <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded">
                Agotado
              </span>
            )}
          </div>
          <p className="text-gray-600 text-lg">{product.description}</p>
          {product.sizes && (
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">
                Seleccione talla:
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    Talla {size}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? "Añadir al carrito" : "Producto agotado"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
