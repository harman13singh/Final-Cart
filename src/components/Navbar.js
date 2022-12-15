import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand">
          <h1>Atam Pargas Cart</h1>
        </a>
        <button type="button" class="btn btn-light position-relative right" >
        <h4 > 🛒 Books</h4>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {props.totalCount}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </nav>
  );
}
