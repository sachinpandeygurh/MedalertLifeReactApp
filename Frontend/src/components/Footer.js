import React from 'react'
import logoImg from "../images/logo.png";
import { Link } from 'react-router-dom';
import appStoreImg from '../images/appstore.png'
import playStoreImg from "../images/playstore.png"
const Footer = () => {
  const id = localStorage.getItem("id");
  const idd = JSON.parse(id);
  return (
    <>
     
     <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-light text-muted bg-dark text-white my-3">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white bg-secondary">
      {/* Left */}
      <div className="me-5 d-none d-lg-block text-white">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <Link
          to="https://www.facebook.com/medalertlife"
          className="me-4 text-reset Social-links"
        >
          <i className="fab fa-facebook-f text-white" />
        </Link>
        <Link
          to="https://twitter.com/Medalert6?t=mbyop1V9vrmFgnFI_-y6Og&s=08"
          className="me-4 text-reset Social-links"
        >
          <i className="fab fa-twitter text-white" />
        </Link>
        <Link
          to="https://goo.gl/maps/LSfztkwPaNLbeLex6"
          className="me-4 text-reset Social-links"
        >
          <i className="fab fa-google text-white" />
        </Link>
        <Link
          to="https://www.instagram.com/medalertlife/"
          className="me-4 text-reset Social-links"
        >
          <i className="fab fa-instagram text-white" />
        </Link>
        <Link
          to="https://www.linkedin.com/company/medalert-life/"
          className="me-4 text-reset Social-links"
        >
          <i className="fab fa-linkedin text-white" />
        </Link>
        {/* <Link to="" class="me-4 text-reset Social-links">
  <i class="fab fa-github"></i>
</Link> */}
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="text-white">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase d-flex justify-content-evenly fw-bold mb-4">
              <img src={logoImg} className='brand_logo_img w-25' alt={`Medalert Life ${logoImg}`} />
              {/* <i class="fas fa-gem me-3"></i>Medalert Life */}
            </h6>
            <p>
            Choose MEDALERT LIFE for reliable ambulance services. We prioritize your safety, well-being, and timely care. Our skilled professionals provide emergency aid, specialized treatments, and 24/7 support. Your health matters to us. <br/> अपना ध्यान रखें और Medalert Life के साथ अपने स्वास्थ्य का ध्यान रखें।
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <Link to="/about" className="text-reset">
                About
              </Link>
            </p>
            <p>
              <Link to="/services" className="text-reset">
                Services
              </Link>
            </p>
            <p>
              <Link to="/Policy" className="text-reset">
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link to="/tnc" className="text-reset">
                Terms and Condition
              </Link>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <Link to="/pricing" className="text-reset">
                Pricing
              </Link>
            </p>
            <p>
              <Link to={idd? `/myprofile/${idd?.phoneNo}` : '/signup'} className="text-reset">
                Orders
              </Link>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> Bhopal, Jabalpur & Indore MP
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@Medalert Life.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> +91 9752 625 048
            </p>
            <section id="download-app">
              <p>Book an ambulance easily with our mobile app. Available on:</p>
              <div className="app-icons row flex-shrink-auto">
                <Link
                  className="flex-shrink-auto w-50"
                  to=" https://bybrisk.page.link/?link=https://bybrisk.com?business_id=629c800e2c5817b22d7b3066&apn=com.bybrisk.strike.app"
                >
                  {/* <i class="fab fa-apple"></i> */}
                  <img
                    style={{ width: "10em" }}
                    className="my-3"
                    src={appStoreImg}
                    alt={`Medalert life ${appStoreImg}`}
                  />
                </Link>
                <Link
                  className="flex-shrink-auto w-50"
                  to=" https://bybrisk.page.link/?link=https://bybrisk.com?business_id=629c800e2c5817b22d7b3066&apn=com.bybrisk.strike.app"
                >
                  {/* <i class="fab fa-google-play"></i> */}
                  <img
                    style={{ width: "10em" }}
                    className="my-3"
                    src={playStoreImg}
                    alt={`Medalert Life ${playStoreImg}`}
                  />
                </Link>
              </div>
            </section>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2023 Copyright:
      <Link className="text-reset fw-bold" to="#">
        Medalert Life
      </Link>
    </div>
    {/* Copyright */}
  </footer>
</>


    </>
  )
}

export default Footer
