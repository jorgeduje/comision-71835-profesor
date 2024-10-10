import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  // let existe = cart.find( (element )=> element.id === product.id)
  // existe === undefined ---> no existe
  // existe !=== undefine ---> existe

  const [cart, setCart] = useState([]); // [{puma, cantidades}, {nike}]

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);

    if (existe) {
      // modificar las cantidades
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      }); // [ {} {} {} {modificado} {}  { } { }]
      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
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
  const getTotalItems = () => {
    let totalItems = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);

    return totalItems;
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product ? product.quantity : 1;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalAmount,
    getTotalItems,
    getTotalQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
