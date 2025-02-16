import React from 'react';
import { Link } from 'react-router-dom';
import zapaPortad from '../../assets/zapaPortad.jpg';
import zapaPortada from '../../assets/zapaPortada.jpg';
import ProductList from '../products/ProductList'; 



const Home = () => {
  const categories = [
    { name: 'Hombre', image: zapaPortada },
    { name: 'Mujer', image: "https://images.unsplash.com/photo-1552066344-2464c1135c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Urbanas', image:"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Deportivas', image: "https://images.unsplash.com/photo-1605523741177-cd660595c2cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHx6YXBhdGlsbGFzfGVufDB8fDB8fHww" },
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
              to="/categoria/zapatillas"
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
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              to={`/categoria/${category.name.toLowerCase()}`}
              key={index}
              className="text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4 shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-800 font-semibold text-lg">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="about py-8 bg-gray-100">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="box bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <div className="icon bg-gray-200 p-4 rounded-full mb-4 flex items-center justify-center">
        <i className="fa-solid fa-truck-fast text-3xl text-gray-800"></i>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Envío gratis</h3>
      <p className="text-sm text-gray-600 text-center">Ordena por encima de $300</p>
    </div>

    <div className="box bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <div className="icon bg-gray-200 p-4 rounded-full mb-4 flex items-center justify-center">
        <i className="fa-solid fa-money-bill text-3xl text-gray-800"></i>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Devolución y reembolso</h3>
      <p className="text-sm text-gray-600 text-center">Garantía de devolución de dinero</p>
    </div>

    <div className="box bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <div className="icon bg-gray-200 p-4 rounded-full mb-4 flex items-center justify-center">
        <i className="fa-solid fa-percent text-3xl text-gray-800"></i>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Descuentos para miembros</h3>
      <p className="text-sm text-gray-600 text-center">10% de descuento en cada orden</p>
    </div>

    <div className="box bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <div className="icon bg-gray-200 p-4 rounded-full mb-4 flex items-center justify-center">
        <i className="fa-solid fa-headphones text-3xl text-gray-800"></i>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Soporte al cliente</h3>
      <p className="text-sm text-gray-600 text-center">Soporte al cliente 24/7</p>
    </div>
  </div>
</div>

    
      <div className="products py-8 bg-gray-200">
        <ProductList /> 
      </div>

      <div className="bg-gray-800 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Diseñadas para la comodidad,<br /> construidas para el rendimiento.
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Descubre nuestra colección de zapatos de alta calidad que se adaptan a tu estilo y necesidades.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Ver Colección
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1549298916-f52d724204b4?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Zapatos de alta calidad"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;