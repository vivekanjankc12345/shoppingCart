import React from "react";
import { useCart } from "../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import api from "../api/api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CartModal = () => {
  const { cart, updateQty, removeFromCart, totalPrice, clearCart } = useCart();

  const handleCheckout = async () => {
    try {
      const order = cart.map(({ id, qty }) => ({ id, quantity: qty }));
      const res = await api.post("/checkout", { items: order });
      toast.success(res.data.message || "Order placed successfully!");
      clearCart();
    } catch (err) {
      console.error(err);
      toast.error("Checkout failed. Please try again.");
    }
  };

  if (cart.length === 0)
    return (
      <div className="text-center mt-5">
        <p>Your cart is empty 🛒</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to product page
        </Link>
      </div>
    );

  return (
    <div className="max-w-lg mx-auto mt-5 border rounded p-4 shadow bg-white">
      <h2 className="text-xl font-bold mb-3">Your Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-2"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p>₹{item.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQty(item.id, item.qty - 1)}
              className="px-2 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.qty}</span>
            <button
              onClick={() => updateQty(item.id, item.qty + 1)}
              className="px-2 bg-gray-200 rounded"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 ml-3"
          >
            <MdDeleteForever size={20} />
          </button>
        </div>
      ))}

      <h3 className="mt-3 font-bold">Total: ₹{totalPrice}</h3>
      <button
        onClick={handleCheckout}
        className="bg-green-600 text-white px-4 py-2 rounded mt-3 w-full hover:bg-green-700"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartModal;
