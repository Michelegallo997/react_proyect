export default function Loader({ message = "Cargando..." }) {
    return (
      <div className="text-center py-8 space-y-2">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="text-gray-600">{message}</p>
      </div>
    );
  }