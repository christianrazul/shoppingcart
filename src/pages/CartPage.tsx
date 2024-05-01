import NavBar from "@/components/NavBar";
import { useCart } from "@/contexts/CartContext";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CartPage = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="flex w-full flex-col justify-center">
      <NavBar />
      <div className="mt-8 md:px-24 lg:px-32 xl:px-48 2xl:px-96">
        <Table className="w-full divide-y divide-gray-200 border shadow-sm">
          <TableCaption>A list of your cart items.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Unit Price</TableHead>
              <TableHead>Total Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="flex items-center gap-4">
                  <img src={item.image} className="h-10 w-10 object-contain" />
                  {item.title}
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>${item.price * item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>
                Total ({cartItems.length} items)
              </TableCell>
              <TableCell>${totalPrice.toFixed(2)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default CartPage;
