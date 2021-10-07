import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src="/assets/logo.png" alt="Logo" className="logo" />
    </Link>
  );
};

export default Logo;
