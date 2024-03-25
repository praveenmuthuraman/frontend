import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ background: "linear-gradient(to bottom, #f0f0f0, #333333)" }}>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <Link to="/login">
            <button type="submit" className="btn btn-primary ">
              Log out
            </button>
          </Link>
        </div>
      </nav>
      <div
        style={{
          background: "linear-gradient(to bottom, #f0f0f0, #333333)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "92vh",
        }}
      >
      </div>
    </div>
  );
};

export default Home;
