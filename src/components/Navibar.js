import React from "react";
import { Link } from "react-router-dom";
import img from "../img/1.jpg";

export const Navibar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header justify-content-sm-between">
              <img
                className="avatar"
                style={{ borderRadius: "50%" }}
                width={50}
                height={50}
                src={img}
                alt="Аватар"
              />

              <div className="user-details">
                <h3 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Александр Досаев
                </h3>
                <p className="user-email">alexander.dosaev@gmail.com</p>
              </div>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul
                className="navbar-nav justify-content-start flex-grow-1 pe-3"
                style={{ fontSize: "25px" }}
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Список постов
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    Обо мне
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ marginBottom: "55px" }}></div>
    </>
  );
};
