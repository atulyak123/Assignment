import { useState } from "react";
import "./Navbar.css";
import { ProductCard } from "../Card";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     
      <nav className="navbar">
        <div className="navbar-logo">E-Shop</div>
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#cart" className="cart-icon">
              Cart 
            </a>
          </li>
        </ul>
        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      {/* Heading Section */}
      <header className="heading">
        <h1>Welcome to E-Shop</h1>
        <p>Your one-stop destination for amazing products and deals!</p>
        <ProductCard/>
      
      </header>
    </>
  );
};

export default Navbar;
