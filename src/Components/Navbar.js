import React from "react";
import PropTypes from "prop-types";
import { Link , Outlet } from "react-router-dom";

export default function Navbar(props) {
  return (
    // first {}->``->${}
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-${props.textColor}`}
          to="/"
          style={props.myTextStyle}
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active text-${props.textColor}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.textColor}`} to="/About">
                {props.aboutText}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* //container-fluid == containerFluid */}
      <div className="containerFluid">
        <div className="row">
          <div className="col-2">
            <div className="form-check form-switch">
              <input
                className={`form-check-input bg-${props.mode==="warning"?'light':'warning'}`}
                style={{cursor:'pointer'}}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleYellowMode}
              />
            </div>
          </div>
          <div className="col-2">
            <div className="form-check form-switch">
              <input
                className={`form-check-input bg-${props.mode==='primary'?'light':'primary'}`}
                style={{cursor:'pointer'}}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleBlueMode}
              />
            </div>
          </div>
          <div className="col-2">
            <div className="form-check form-switch">
              <input
                className={`form-check-input bg-${props.mode==='danger'?'light':'danger'}`}
                style={{cursor:'pointer'}}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleRedMode}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-check form-switch">
              <input
                className={`form-check-input bg-${props.mode==='dark'?'light':'dark'}`}
                style={{cursor:'pointer'}}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleDarkMode}
              />
              <label
                className={`form-check-label text-${props.textColor}`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "set about here",
};
