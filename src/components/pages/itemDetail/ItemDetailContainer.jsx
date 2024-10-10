import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { toast } from "sonner";

const ItemDetailContainer = () => {
  // hook --> recuperar la parte dinamica de la ruta
  const [item, setItem] = useState({});
  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams(); // devuelve un objeto {}

  let totalItems = getTotalQuantityById(id);

  // const navigate = useNavigate();

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }

    // navigate("/cart");
  }, [id]);

  const onAdd = (quantity) => {
    let productoParaElCarrito = { ...item, quantity };
    addToCart(productoParaElCarrito);
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Se agrego al carrito",
    //   showConfirmButton: true,
    //   // timer: 1500,
    // });
    toast.success("Se agrego el producto", {
      closeButton: true,
      description: "algo mas",
      position: "top-center",
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />;
};

export default ItemDetailContainer;
