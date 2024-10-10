import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext); // ---> objeto del value de ese context

  const totalItems = getTotalItems();

  return (
    <div>
      <Badge badgeContent={totalItems} color="primary" max={50} showZero={true}>
        <ShoppingCartIcon />
      </Badge>
      {/* <h2>icono del carrito</h2>
      <h4>{totalItems}</h4> */}
    </div>
  );
};

export default CartWidget;
