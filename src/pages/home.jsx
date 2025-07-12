import React, { useState, useEffect } from "react";
import { Heart, ArrowRight, Truck, Shield, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Navigate = useNavigate();

  const heroSlides = [
    {
      title: "Summer Collection 2025",
      subtitle: "Discover the latest trends",
      description:
        "Elevate your style with our premium summer collection featuring sustainable fashion",
      image:
        "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2019/04/chatsrat-1.jpg",
      textColor: "text-white",
    },
    {
      title: "Tech Essentials",
      subtitle: "Innovation meets design",
      description:
        "Cutting-edge technology products that enhance your digital lifestyle",
      image:
        "https://keronrose.com/wp-content/uploads/2024/01/Tech-For-Your-Online-Business-1060x557.png",
      textColor: "text-white",
    },
    {
      title: "Home & Living",
      subtitle: "Transform your space",
      description:
        "Create your perfect sanctuary with our curated home collection",
      image:
        "https://thumbs.dreamstime.com/b/stylish-living-room-big-windows-stylish-living-room-big-windows-wooden-blinds-wooden-coffee-table-simple-175376070.jpg",
      textColor: "text-white",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      category: "Electronics",
      isNew: true,
    },
    {
      id: 2,
      name: "Luxury Leather Handbag",
      price: 189,
      originalPrice: 249,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
      category: "Fashion",
      isSale: true,
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 399,
      originalPrice: 499,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      category: "Wearables",
      isNew: true,
    },
    {
      id: 4,
      name: "Artisan Coffee Maker",
      price: 159,
      originalPrice: 199,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
      category: "Home",
      isSale: true,
    },
  ];

  const categories = [
    {
      name: "Fashion",
      image:
        "https://t4.ftcdn.net/jpg/01/27/15/49/360_F_127154936_1zPSMtnW4Vtr4Whoe7xNCWwZ6Ay7mkBd.jpg",
      items: "2,500+ items",
    },
    {
      name: "Electronics",
      image:
        "https://img.etimg.com/thumb/width-1600,height-900,imgsize-33366,resizemode-75,msid-106289730/industry/cons-products/electronics/premiumisation-investments-to-propel-appliances-consumer-electronics-industry-in-2024.jpg",
      items: "1,800+ items",
    },
    {
      name: "Home & Living",
      image:
        "https://images.meesho.com/images/products/306027737/d6f7w_512.webp",
      items: "3,200+ items",
    },
    {
      name: "Sports",
      image:
        "https://media.istockphoto.com/id/1188462138/photo/variety-of-sport-accessories-on-wooden-surface.jpg?s=612x612&w=0&k=20&c=y2l7DYNkxbVteZy-Kx_adCzm-soTRbiEypje4j8ENe0=",
      items: "950+ items",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleClothClick = () => {
    Navigate("/products");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
        >
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl mx-auto">
              <h2
                className={`text-5xl md:text-7xl font-bold mb-6 ${heroSlides[currentSlide].textColor} animate-fade-in`}
              >
                {heroSlides[currentSlide].title}
              </h2>
              <p
                className={`text-xl md:text-2xl mb-4 ${heroSlides[currentSlide].textColor} opacity-90`}
              >
                {heroSlides[currentSlide].subtitle}
              </p>
              <p
                className={`text-lg mb-8 ${heroSlides[currentSlide].textColor} opacity-80 max-w-2xl mx-auto`}
              >
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleClothClick()}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Shop Now <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Free shipping on orders over $50. Fast and reliable delivery
                worldwide.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                Your payment information is encrypted and secure with our SSL
                protection.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                30-day return policy. No questions asked, hassle-free returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Discover our wide range of premium products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-w-4 aspect-h-3 mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0  group-hover: transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-baseline justify-center">
                    <div className="text-center text-black">
                      <h3 className="text-4xl font-bold mb-2">
                        {category.name}
                      </h3>
                      <p className="text-1xl opacity-90">{category.items}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked favorites just for you
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      SALE
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-gray-600 ml-2">
                      ⭐ ({product.rating})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{product.price}
                      </span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => handleClothClick()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Subscribe to our newsletter for exclusive deals, new arrivals, and
            style tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
