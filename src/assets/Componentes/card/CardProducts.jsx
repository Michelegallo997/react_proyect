import React from 'react';
import "./CardProducts.css"

function CardProducts(props) {
    const { img, title, description, price }= props;
    return(
    <>
    <section className='Card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-8'>
    <div className="bg-gray-400 p-4 m-2 rounded-lg shadow-md hover:shadow-lg transition">
      <img src={img} alt={`Imagen de ${title}`} className="w-full h-40 object-cover rounded-md mb-4"/>
      
        <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <h3 className="text-lg font-semibold text-green-600">${price}</h3>
        <button className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-blue-600">
          Comprar
        </button>
      </div>
    </section>
    </>
  )
}

export default CardProducts;
