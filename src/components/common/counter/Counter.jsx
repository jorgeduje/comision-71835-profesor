import { useState } from "react";

const Counter = () => {
  // ESTADOS
  const [contador, setContador] = useState(10); // x = [ variable , funcion que hace cambiar esa variable ]

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Counter;

// let [a, b, c ] = [ 1, true, "hola" ]
// console.log( c )
