import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";

const Details = ({ clothData }) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  if (!clothData) {
    return (
      <div className="text-center mt-5">
        <h1 className="text-5xl font-semibold text-red-500">
          No product selected
        </h1>
        <button className="btn btn-primary mt-3" onClick={() => Navigate("/")}>
          Back to Home Page
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        name: clothData.id,
        title: clothData.title,
        image: clothData.image,
        pricing: clothData.pricing,
        quantity: 1,
      })
    );
    Navigate("/cart");
    toast.success(
      <div>
        <b>Success!</b> Your item was added.
      </div>,
      { icon: "✅" }
    );
  };

  return (
    <>
      <div className="h-auto w-full max-w-6xl mx-auto bg-white rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 p-4 md:p-10 bg-gray-50 flex items-center justify-center">
          <div className="w-full h-64 md:h-[450px] flex items-center justify-center overflow-hidden rounded-lg bg-white shadow-md">
            <img
              src={clothData.image}
              alt={clothData.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col justify-between space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            {clothData.title}
          </h1>

          <div className="flex items-center space-x-2">
            <div className="text-yellow-400 text-lg md:text-xl">
              ⭐ {clothData.rating}
            </div>
            <span className="text-gray-600 text-sm">
              ({clothData.reviews} reviews)
            </span>
          </div>

          <div>
            <span className="text-2xl md:text-4xl font-semibold text-red-500">
              ₹{clothData.pricing}
            </span>
          </div>

          <div className="text-gray-700 text-sm md:text-lg leading-relaxed">
            <p>{clothData.shortDescription}</p>
          </div>

          {clothData.sizes?.length > 0 && (
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Available Sizes & Prices
              </h2>
              <div className="flex flex-wrap gap-3">
                {clothData.sizes.map((size, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-2 px-4 bg-gray-200 rounded-full shadow-md hover:bg-blue-100 transition"
                  >
                    <span className="text-sm md:text-base font-semibold">
                      {size.label}
                    </span>
                    <span className="text-xs text-gray-600">₹{size.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Add to Cart
            </button>
            <button className="w-full sm:w-auto border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 mb-2">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => Navigate("/womenclothes")}
        >
          Back to Page
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Details;
