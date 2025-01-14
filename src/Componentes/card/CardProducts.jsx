import React from "react";
import { useNavigate } from "react-router-dom";

function CardProducts({ id, imageUrl, title }) {
  const navigate = useNavigate();

  return (
    <div
      className="card bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col justify-between h-full ml-4 group cursor-pointer"
      onClick={() => navigate(`/product/${id}`)} 
    >
      {/* Imagen */}
      <div className="relative overflow-hidden rounded-md mb-4">
        <img
          src={imageUrl}
          alt={`Imagen de ${title}`}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Información del producto */}
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
      </div>
    </div>
  );
}

export default CardProducts;
