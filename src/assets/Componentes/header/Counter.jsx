import { useState } from 'react';

function Counter() {
  // Estado para manejar el valor del contador
  const [count, setCount] = useState(0);

  // Número máximo permitido
  const maxCount = 10;

  // Función para incrementar el contador
  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  // Función para decrementar el contador
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Función para reiniciar el contador
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Mostramos el valor del contador */}
      <h1>Contador: {count}</h1>

      {/* Botón para incrementar */}
      <button onClick={increment}>Incrementar</button>

      {/* Botón para decrementar */}
      <button onClick={decrement} style={{ marginLeft: '10px' }}>
        Decrementar
      </button>

      {/* Botón para reiniciar */}
      <button onClick={reset} style={{ marginLeft: '10px' }}>
        Reiniciar
      </button>

      {/* Mensaje si se alcanza el máximo */}
      {count === maxCount && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          ¡Has alcanzado el máximo permitido!
        </p>
      )}
    </div>
  );
}

export default Counter;