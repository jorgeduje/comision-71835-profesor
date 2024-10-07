import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{p, q}, {p, q}, {p, q}]

  const addToCart = (product) => {
    // manejar el correcto funcionamiento del carrito
    // verificar si existe

    setCart([...cart, product]); // [] --> [ {}, {}, {}, {} ]
  };

  // eliminar un producto -->
  const deleteProductById = (id) => {
    let arrayFiltrado = cart.filter((product) => product.id !== id); // [{5}, {7}]
    setCart(arrayFiltrado);
  };

  // una funcion que me diga el total a pagar
  const getTotalAmount = () => {
    let totalCarrito = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalCarrito;
  };

  // una funcion que me diga el total de productos del carrito
  const getTotalItems = () => {};

  const clearCart = () => {
    setCart([]);
  };

  let data = { cart, addToCart, clearCart, deleteProductById, getTotalAmount };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
