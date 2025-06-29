import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Clothes from "./pages/womenclothes";
import Details from "./pages/details";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Profile from "./pages/profile";
import { AuthProvider } from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  const [clothData, setClothData] = useState({});

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/womenclothes"
              element={<Clothes setClothData={setClothData} />}
            />
            <Route
              path="/details/:id"
              element={<Details clothData={clothData} />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
