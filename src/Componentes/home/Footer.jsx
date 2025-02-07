import React from 'react'


const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Zapatos Premium</h4>
              <p className="text-gray-400 text-sm">
                Diseñados para ofrecerte estilo y comodidad en cada paso.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Explorar</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Novedades</a></li>
                <li><a href="#" className="hover:text-white transition">Hombres</a></li>
                <li><a href="#" className="hover:text-white transition">Mujeres</a></li>
                <li><a href="#" className="hover:text-white transition">Ofertas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Ayuda</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-white transition">Envíos</a></li>
                <li><a href="#" className="hover:text-white transition">Devoluciones</a></li>
                <li><a href="#" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Suscríbete</h4>
              <p className="text-gray-400 text-sm mb-4">
                Recibe las últimas noticias y ofertas directamente en tu correo.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-2 text-gray-900 rounded-lg mb-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            &copy; 2025 Zapatos Premium. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer