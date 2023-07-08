import React, { useState, useEffect } from "react";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CNav,
} from "@coreui/react";
import logoImg from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [visible ,setVisible] = useState(false)
  const [visibleone ,setVisibleone] = useState(false)
  const router = useNavigate();
  const id = localStorage.getItem("id");
  const idd = JSON.parse(id);

  const [dBlock, setDBlock] = useState(""); // dBlock state for display block CSS classes

  const toggleNavbar = () => {
    setVisible(!visible);
    setDBlock("");
  };

  const closeNavbar = () => {
    setVisible(false);
    setDBlock("d-block"); // Add display block CSS classes when closing the navbar
  };
  //console.log(idd.phoneNo);
  // const idd =JSON.parse(id);
  useEffect(() => {}, [id]);

  //console.log(id);

  const logOut = () => {
    localStorage.clear();
    router("/");
  };
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-danger text-white">
        <CContainer fluid>
          <CNavbarBrand to="/">
            <img
              src={logoImg}
              alt={`https://medalertlife.com/${logoImg}`}
              srcSet={logoImg}
              className="brand_logo_img"
            />
            <Link className="fw-bold text-decoration-none text-white px-1">
              Medalert Life
            </Link>
          </CNavbarBrand>
          <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded={visible}
        onClick={toggleNavbar}
      />
      <CCollapse className={`navbar-collapse ${visible ? "show" : ""}`} onClick={closeNavbar}>
        <CNavbarNav className={`custmnav ${dBlock}`}>
          <CNav>
            <CNavLink className="text-white fw-bold">
              <Link className="text-decoration-none text-white nav-link" to="/">
                Home
              </Link>
            </CNavLink>
          </CNav>
          <CNav>
            <CNavLink className="text-white fw-bold">
              <Link className="text-decoration-none text-white nav-link" to="/about">
                About
              </Link>
            </CNavLink>
          </CNav>
          <CNav>
            <CNavLink className="text-white fw-bold">
              <Link className="text-decoration-none text-white nav-link" to="/services">
                Services
              </Link>
            </CNavLink>
          </CNav>
          <CNav>
            <CNavLink className="text-white fw-bold">
              <Link className="text-decoration-none text-white nav-link" to="/contact">
                Contact
              </Link>
            </CNavLink>
          </CNav>
        </CNavbarNav>
      </CCollapse>
          <CDropdownToggle className="bg-inherit navbarTogglerBtn"
            aria-label="Toggle navigation"
            aria-expanded={visibleone}
            onClick={() => setVisibleone(!visibleone)}
          />
          <CCollapse
            className="navbar-collapse border justify-content-around  col-md-1 mx-md-0 rounded px-md-0"
            visible={visibleone}
          >
            <div className="d-flex justify-content-evenly">

              {id ? (
                <>
                  <CNav className="mx-md-2">
                    <CNavLink className="text-white fw-bold">
                      <Link
                        className="text-decoration-none text-white nav-link"
                        to="/signup"
                        onClick={logOut}
                      >
                        Logout
                      </Link>
                    </CNavLink>
                  </CNav>
                  <CNav className="mx-md-2">
                    <CNavLink className="text-white fw-bold">
                      <Link
                        className="text-decoration-none text-white nav-link"
                        to={`/myprofile/${idd.phoneNo}`}
                      >
                        My Profile
                      </Link>
                    </CNavLink>
                  </CNav>
                </>
              ) : (
                <>
                  <CNav className="mx-md-2 text-decoration-none">
                    <CNavLink className="text-white fw-bold text-decoration-none">
                      <Link
                        className="text-decoration-none text-white nav-link"
                        to="/signup"
                      >
                        Sign Up
                      </Link>
                    </CNavLink>
                  </CNav>
                  <CNav className="mx-md-2">
                    <CNavLink className="text-white fw-bold">
                      <Link
                        className="text-decoration-none text-white nav-link"
                        to="/login"
                      >
                        Login
                      </Link>
                    </CNavLink>
                  </CNav>
                </>
              )}
            </div>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <Link className="navbar-brand" to="/">
//     Navbar
//   </Link>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-toggle="collapse"
//     data-target="#navbarSupportedContent"
//     aria-controls="navbarSupportedContent"
//     aria-label="Toggle navigation"
//     aria-expanded="false"
//     // onClick={() => setVisible(!visible)}
//   >
//     <span className="navbar-toggler-icon" />
//   </button>
//   <div className="collapse navbar-collapse" id="navbarSupportedContent" >
//     {/* Navigation Links */}
//     <ul className="navbar-nav mr-auto">
//       {/* Home Link */}
//       <li className="nav-item active">
//         <Link className="nav-link" to="/">
//           Home <span className="sr-only">(current)</span>
//         </Link>
//       </li>
//       {/* Regular Link */}
//       <li className="nav-item">
//         <Link className="nav-link" to="/">
//           Link
//         </Link>
//       </li>
//       {/* Dropdown */}
//       <li className="nav-item dropdown">
//         <Link
//           className="nav-link dropdown-toggle"
//           to="/"
//           id="navbarDropdown"
//           role="button"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           Dropdown
//         </Link>
//         {/* Dropdown Menu */}
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <Link className="dropdown-item" to="/">
//             Action
//           </Link>
//           <Link className="dropdown-item" to="/">
//             Another action
//           </Link>
//           <div className="dropdown-divider" />
//           <Link className="dropdown-item" to="/">
//             Something else here
//           </Link>
//         </div>
//       </li>
//       {/* Disabled Link */}
//       <li className="nav-item">
//         <Link className="nav-link disabled" to="/">
//           Disabled
//         </Link>
//       </li>
//     </ul>
//     {/* Search Form */}
//     <form className="form-inline my-2 my-lg-0">
//       <input
//         className="form-control mr-sm-2"
//         type="search"
//         placeholder="Search"
//         aria-label="Search"
//       />
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//         Search
//       </button>
//     </form>
//   </div>
// </nav>


    
  );
};

export default Header;
