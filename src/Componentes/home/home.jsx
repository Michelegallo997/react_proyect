import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import zapaPortad from '../../assets/zapaPortad.jpg';
import zapaPortada from '../../assets/zapaPortada.jpg';
import products from '../../data/data';
import CardProducts from '../card/CardProducts';

const Home = () => {
  const [homeproducts] = useState(products);

  const categories = [
    { name: 'Hombres', image: zapaPortada },
    { name: 'Mujer', image: zapaPortada },
    { name: 'Urbanos', image: zapaPortada },
    { name: 'Deportivos', image: zapaPortada },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-300 py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          {/* Text Section */}
          <div className="mb-6 lg:mb-0 lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Stride Ahead: Where Comfort Meets Style.
            </h2>
            <Link
              to="/Zapatillas"
              className="inline-block bg-white text-gray-800 font-medium px-6 py-3 rounded-md shadow-md hover:bg-black hover:text-white transition-all duration-300"
            >
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
              src={zapaPortad}
              alt="Zapatillas"
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="products_type py-8 bg-gray-100">
        <div className="container mx-auto flex flex-wrap justify-center lg:justify-between">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-2 shadow-lg">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800 font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="products py-8 bg-gray-200">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {homeproducts.map((product) => (
      <CardProducts
        key={product.id}
        id={product.id} // Pasar el id del producto
        imageUrl={product.imageUrl}
        title={product.title}
      />
    ))}
  </div>
</div>
    </>
  );
};

export default Home;
