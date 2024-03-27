import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    console.log("clicked");
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 mx-56">
      <div className="flex justify-between">
        <h2 className="font-bold px-2 py-4 text-2xl">Cart</h2>
        <button
          onClick={handleClearCart}
          className="p-2 m-2 border border-black bg-black text-white rounded-lg hover:bg-white hover:text-black "
        >
          Clear Cart
        </button>
      </div>
      <div className="m-auto border border-black my-7">
        {cartItems.length === 0 && (
          <h2 className=" text-center text-white bg-red-600">Cart is Empty</h2>
        )}
        <Itemlist items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
