import NavBar from "@/components/NavBar";
import { useCart } from "@/contexts/CartContext";

const CartPage = () => {
  const { cartItems } = useCart();
  return (
    <>
      <NavBar />
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CartPage;
