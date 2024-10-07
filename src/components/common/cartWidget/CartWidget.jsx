import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const CartWidget = () => {
  const { cart } = useContext(CartContext); // ---> objeto del value de ese context

  return (
    <div>
      <Badge
        badgeContent={cart.length}
        color="primary"
        max={50}
        showZero={true}
      >
        <ShoppingCartIcon />
      </Badge>
      {/* <h2>icono del carrito</h2>
      <h4>{cart.length}</h4> */}
    </div>
  );
};

export default CartWidget;
