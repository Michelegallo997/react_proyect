import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/data";

const ProductDetails = () => {
  const { id } = useParams(); // Obtener el id del producto desde la URL
  const product = products.find((p) => p.id === parseInt(id)); // Buscar el producto por id
  const navigate = useNavigate();

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        onClick={() => navigate(-1)}
      >
        Volver
      </button>
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-4">
        {/* Imagen */}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full lg:w-1/2 rounded-lg mb-4 lg:mb-0"
        />
        {/* Detalles */}
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price}
          </h3>
          <div className="mb-4">
            <label className="block text-gray-800 font-medium mb-2">
              Seleccione Talla:
            </label>
            <select className="w-full px-4 py-2 border rounded">
              <option>38</option>
              <option>39</option>
              <option>40</option>
              <option>41</option>
              <option>42</option>
            </select>
          </div>
          <button className="w-full px-4 py-2 bg-black text-white rounded hover:bg-blue-600 transition-colors duration-300">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
