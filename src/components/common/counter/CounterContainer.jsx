import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  console.log("me ejecuto");
  // ESTADOS
  const [contador, setContador] = useState(10); // x = [ variable , funcion que hace cambiar esa variable ]

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  let childProps = {
    contador,
    sumar,
    restar,
  };

  return <Counter {...childProps} />;
};
export default CounterContainer;
