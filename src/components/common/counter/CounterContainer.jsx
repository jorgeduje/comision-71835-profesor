import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  const [contador, setContador] = useState(10);

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
