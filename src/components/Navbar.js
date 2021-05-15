import React from "react";
// import "./style.css";

function Navbar(props) {
  return (
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">{props.title}</span>
        <p>{props.subhead}</p>
      </div>
    </nav>
  );
}

export default Navbar;
