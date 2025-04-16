import React from "react";
import Navbar from "./Navbar";
import './Header.css'

const Header = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "Contact", url: "/contact" },
    { title: "About", url: "/about" },
    { title: "Blog", url: "/blog" },
    { title: "Profile", url: "/profile" },
  ];
  return (
    <header>
      <a href="">Logo</a>
      <Navbar links={links}/>
    </header>
  );
};

export default Header;
