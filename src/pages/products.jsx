import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const Navigate = useNavigate();
  const categories = [
    {
      id: "women-clothes",
      title: "Women Clothes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQx0izQpYCdOrzc7BuzcKW6sJkYKKCJrZ3Q&s",
      description: "Elegant styles for women",
    },
    {
      id: "men-clothes",
      title: "Men Clothes",
      image:
        "https://assets.vogue.com/photos/5891e0ebb482c0ea0e4db2a8/4:3/w_2560%2Cc_limit/02-lestrange.jpg",
      description: "Trendy fashion for men",
    },

    {
      id: "kids-clothes",
      title: "Kids Clothes",
      image:
        "https://img.joomcdn.net/fb42dbb55824c75d781126d9d66fb0ec0eb8dbda_original.jpeg",
      description: "Cute outfits for children",
    },
    {
      id: "men-shoes",
      title: "Men Shoes",
      image:
        "https://fausto.in/cdn/shop/files/FST_FOSMC-2077_BLACK-1_MOOD-SHOT.jpg?v=1703128805",
      description: "Comfortable and stylish footwear",
    },
    {
      id: "women-shoes",
      title: "Women Shoes and sandals",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdvcg_UYbvLZEs4cDS0Ga5y48VVnvEzhDXw&s",
      description: "Comfortable and stylish footwear",
    },
    {
      id: "kids-shoes",
      title: "kids Shoes",
      image:
        "https://img.freepik.com/premium-photo/babys-little-sneakers-colorful-background-concept-waiting-baby_197602-3747.jpg?semt=ais_hybrid&w=740",
      description: "Comfortable and stylish footwear",
    },
    {
      id: "purse",
      title: "Purses & Bags",
      image:
        "https://modarta.in/cdn/shop/files/1A7A9579copy_1500x.jpg?v=1718215821",
      description: "Designer bags and purses",
    },
    {
      id: "skin-care",
      title: "Skin Care",
      image:
        "https://www.colorbarcosmetics.com/media/mageplaza/blog/post/s/k/skin_care_products_feature_image.png?auto=webp&format=pjpg&width=800&height=700&fit=cover",
      description: "Premium skincare products",
    },
    {
      id: "makeup",
      title: "Makeup",
      image:
        "https://img.freepik.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg?semt=ais_hybrid&w=740",
      description: "Beauty and cosmetics",
    },
    {
      id: "jewellery",
      title: "Jewellery",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf233YjCHPR7pFu6ACQaPcvObBdQgKLx2pWQ&s",
      description: "Elegant jewelry collection",
    },
    {
      id: "toys",
      title: "Toys",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJXpNM9wRxXK9HWlW2cHrSwv20e_7lOg-3Q&s",
      description: "Fun toys for all ages",
    },
    {
      id: "study-material",
      title: "Study Material",
      image:
        "https://files.idyllic.app/files/static/2757991?width=384&optimizer=image",
      description: "Educational resources",
    },
    {
      id: "soft-toy",
      title: "Soft Toys",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjbKu210C81sA9Zltdg22Tfb2eWbnGUSXaw&s",
      description: "Cuddly plush toys",
    },
    {
      id: "books",
      title: "Books",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83o2knWHswHDdmmoym8utD3IPznalnOrtyg&s",
      description: "Wide selection of books",
    },
    {
      id: "watches",
      title: "Watches",
      image: "https://m.media-amazon.com/images/I/61n0aVXta7L._AC_UY1000_.jpg",
      description: "Luxury timepieces",
    },
  ];

  const handleCategoryClick = () => {
    Navigate("/womenclothes");
  };
  return (
    <>
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Discover Amazing Products
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Shop from our wide range of categories and find exactly what you need
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product;
