import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const handleRemove = (name) => {
    dispatch(removeFromCart(name));
  };

  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-5 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full lg:w-[65%] p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Product Details
          </h1>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center p-3 mb-3 border border-gray-200 rounded-lg bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-30 h-40 object-cover rounded mr-4"
                />
                <div className="flex-grow">
                  <div className="text-lg font-bold mb-1 text-gray-800">
                    {item.title}
                  </div>
                  <div className="text-base font-bold text-red-500 mb-1">
                    ₹{item.pricing}
                  </div>

                  <div className="text-sm text-gray-600 mb-1">Size: M</div>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        item.quantity > 1
                          ? dispatch(
                              updateQuantity({
                                name: item.name,
                                quantity: item.quantity - 1,
                              })
                            )
                          : dispatch(removeFromCart(item.name))
                      }
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="font-medium">{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            name: item.name,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.name)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        <div className="w-full lg:w-[35%] p-8 bg-gray-50 border-l border-gray-200">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Price Details
          </h1>

          <div className="flex justify-between items-center mb-4 text-base">
            <span className="text-gray-600">Items </span>
            <span className="font-bold text-gray-800">{cartItems.length}</span>
          </div>

          <div className="flex justify-between items-center mb-4 text-base">
            <span className="text-gray-600">Total Product Price</span>
            <span className="font-bold text-gray-800">
              ₹
              {cartItems.reduce(
                (total, item) => total + item.pricing * item.quantity,
                0
              )}
            </span>
          </div>

          <div className="flex justify-between items-center mb-4 text-base">
            <span className="text-gray-600">Total Discount</span>
            <span className="font-bold text-gray-800">-₹0</span>
          </div>

          <div className="border-t-2 border-gray-800 pt-4 mt-5 mb-8">
            <div className="flex justify-between items-center text-xl font-bold text-gray-800">
              <span>Total Order</span>
              <span>
                ₹
                {cartItems.reduce(
                  (total, item) => total + item.pricing * item.quantity,
                  0
                )}
              </span>
            </div>
          </div>

          <button
            //  onClick={handleCheckout}
            className="w-full py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-md mt-5"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
