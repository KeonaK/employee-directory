import React from "react";
// import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{props.title}</span>
      </div>
    </nav>
  );
}

export default Navbar;
