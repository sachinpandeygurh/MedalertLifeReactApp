import React, { useState,useEffect } from "react";
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
  CDropdownDivider,CNav
} from "@coreui/react";

import logoImg from "../images/logo.png";
import { Link , useNavigate, } from "react-router-dom";

const Header = () => {
  const router=useNavigate();
  const [visible, setVisible] = useState(false);
  const id = localStorage.getItem("id");
  const idd=JSON.parse(id);
  // console.log(idd.phoneNo);
  // const idd =JSON.parse(id);
  useEffect(() => {
    
  }, [id])
  
  // console.log(id);

  const logOut = () => {
    localStorage.clear();
    router('/')
  }
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-danger text-white">
        <CContainer fluid>
          <CNavbarBrand to="/">
            <img
              src={logoImg}
              alt={`https://medalertlife.com/${logoImg}`}
              srcset={logoImg}
              className="brand_logo_img"
            />
            <Link className="fw-bold text-decoration-none text-white px-1">
              Medalert Life
            </Link>
          </CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)
            }
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNav>
                <CNavLink className="text-white fw-bold">
                  <Link
                    className="text-decoration-none text-white nav-link"
                    to="/"
                  >
                    Home
                  </Link>
                </CNavLink>
              </CNav>
              <CNav>
                <CNavLink className="text-white fw-bold">
                  <Link
                    className="text-decoration-none text-white nav-link"
                    to="/about"
                  >
                    About
                  </Link>
                </CNavLink>
              </CNav>
              <CNav>
                <CNavLink className="text-white fw-bold">
                  <Link
                    className="text-decoration-none text-white nav-link"
                    to="/services"
                  >
                    Services
                  </Link>
                </CNavLink>
              </CNav>
              <CNav>
                <CNavLink className="text-white fw-bold">
                  <Link
                    className="text-decoration-none text-white nav-link"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </CNavLink>
              </CNav>
            </CNavbarNav>
          </CCollapse>
          <CCollapse
            className="navbar-collapse border justify-content-around  col-md-1 mx-md-0 rounded px-md-0"
            visible={visible}
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
  );
};

export default Header;
