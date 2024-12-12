import { useState, useEffect } from 'react';

function Title(props) {
  useEffect(() => {
    alert('¡Bienvenido!');
  }, []);

  const styleTitle = { "font-size": props.size };

  return <h1 className="text-center m-4" style={styleTitle}>{props.children}</h1>;
}

export default Title;