import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = () => (
  <header>
    <div className="Button">
      <Link to="/">MainPage </Link>

      <Link to="/sign-in">SignInPage </Link>

      <Link to="/profile">ProfilePage </Link>
    </div>
  </header>
);

const Layout = () => (
  <div>
    <Header />
  </div>
);

export default Layout;
