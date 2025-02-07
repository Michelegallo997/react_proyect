export default function ErrorMessage({ message, onRetry }) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="text-red-500">
          <i className="fas fa-exclamation-triangle text-4xl"></i>
        </div>
        <p className="text-gray-800 text-lg">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Reintentar
          </button>
        )}
      </div>
    );
  }