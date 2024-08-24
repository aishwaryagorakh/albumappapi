import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="contianer">
      <div className="textcontent-logo">
        <Link to="/">
          <p>Albumlist</p>
        </Link>
      </div>
      <div className="button-add">
        {/* using Link comes from react router dom and link to the relevant page */}
        <Link to="/add">
          <button>Add User</button>
        </Link>
      </div>
    </div>
  );
}
