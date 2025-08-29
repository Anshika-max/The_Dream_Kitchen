import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages from landing_page folders
import Home from "./LandingPage/home/hero.jsx";
import About from "./LandingPage/about/AboutHero.jsx";
import Contact from "./LandingPage/contact/contactHero.jsx";
import Menu from "./LandingPage/Menu/MenuHero.jsx";
import "./App.css"
import Footer from "./LandingPage/Footer.jsx"
import NavBar from "./LandingPage/NavBar.jsx"
import Login from "./LandingPage/SignUp/Login.jsx";
import SignUp from "./LandingPage/SignUp/SignUp.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Cart from "./LandingPage/cart/CartHero.jsx";
import Order from "./LandingPage/Orders/OrderHero.jsx";
import { CartProvider } from "./contexts/CartContext"; 
import Starter from "./LandingPage/Menu/Starter.jsx";
import AdminDashboard from "./LandingPage/admin/adminDashboard.jsx";
import { ProductProvider } from "./contexts/ProductContext";
import ManageProducts from "./LandingPage/admin/ManageProducts.jsx";
import ManageUsers from "./LandingPage/admin/ManageUsers.jsx";
import ManageCategories from "./LandingPage/admin/ManageCategories.jsx";
import ManageOrder from "./LandingPage/admin/ManageOrder.jsx";
import { CategoryProvider } from "./contexts/CategoryContext.jsx";
// import { PaymentProvider } from "./contexts/PaymentContext.jsx";
import ProductsByCategory from "./LandingPage/Menu/ProductsByCategory.jsx";
import PaymentPage from "./LandingPage/payment/PaymentPage.jsx";
import AddressPage from "./LandingPage/payment/AddressPage.jsx";
import NotFound from "./LandingPage/NotFound.jsx";

function App() {
  return (
    <AuthProvider>
    <CartProvider>
    <ProductProvider>
    <CategoryProvider>
    {/* <PaymentProvider> */}
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/Starter" element={<Starter />} />
      <Route path="/admin_dash" element={<AdminDashboard />} />
      <Route path="/admin_product" element={<ManageProducts />} />
      <Route path="/admin_User" element={<ManageUsers />} />
      <Route path="/admin_category" element={<ManageCategories />} />
      <Route path="/admin_order" element={<ManageOrder />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/menu/:id" element={<ProductsByCategory />} />

       {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    {/* </PaymentProvider> */}
    </CategoryProvider>
    </ProductProvider>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
