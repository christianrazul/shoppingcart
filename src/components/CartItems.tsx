import { CartItem } from "@/pages/ShopPage";
import { useOutletContext } from "react-router-dom";

const CartItems = () => {
  const cartItems = useOutletContext<CartItem[]>();

  return (
    <div>
      <h1>Cart Items</h1>

      {cartItems && (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} : {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItems;
