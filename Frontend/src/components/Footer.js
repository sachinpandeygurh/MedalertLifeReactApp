import React from 'react'

const Footer = () => {
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
        <a
          href="https://www.facebook.com/medalertlife"
          className="me-4 text-reset Social-links"
        >
          <i className="fab fa-facebook-f text-white" />
        </a>
        <a
          href="https://twitter.com/Medalert6?t=mbyop1V9vrmFgnFI_-y6Og&s=08"
          className="me-4 text-reset Social-links"
        >
          <i className="fab fa-twitter text-white" />
        </a>
        <a
          href="https://goo.gl/maps/LSfztkwPaNLbeLex6"
          className="me-4 text-reset Social-links"
        >
          <i className="fab fa-google text-white" />
        </a>
        <a
          href="https://www.instagram.com/medalertlife/"
          className="me-4 text-reset Social-links"
        >
          <i className="fab fa-instagram text-white" />
        </a>
        <a
          href="https://www.linkedin.com/company/medalert-life/"
          className="me-4 text-reset Social-links"
        >
          <i className="fab fa-linkedin text-white" />
        </a>
        {/* <a href="" class="me-4 text-reset Social-links">
  <i class="fab fa-github"></i>
</a> */}
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
              <img src="./images/ambulance.png" alt="" />
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
              <a href="./about/index.html" className="text-reset">
                About
              </a>
            </p>
            <p>
              <a href="./services/index.html" className="text-reset">
                Services
              </a>
            </p>
            <p>
              <a href="./pp/index.html" className="text-reset">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="./tnc/index.html" className="text-reset">
                Terms and Condition
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="error.html" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="error.html" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="error.html" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="error.html" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> Bhopal MP
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@Medalert Life.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> +91 9752 625 048
            </p>
            {/* <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p> */}
            <section id="download-app">
              <p>Book an ambulance easily with our mobile app. Available on:</p>
              <div className="app-icons row flex-shrink-auto">
                <a
                  className="flex-shrink-auto w-50"
                  href=" https://bybrisk.page.link/?link=https://bybrisk.com?business_id=629c800e2c5817b22d7b3066&apn=com.bybrisk.strike.app"
                >
                  {/* <i class="fab fa-apple"></i> */}
                  <img
                    style={{ width: "10em" }}
                    className="my-3"
                    src="./images/appstore.png"
                    alt=""
                  />
                </a>
                <a
                  className="flex-shrink-auto w-50"
                  href=" https://bybrisk.page.link/?link=https://bybrisk.com?business_id=629c800e2c5817b22d7b3066&apn=com.bybrisk.strike.app"
                >
                  {/* <i class="fab fa-google-play"></i> */}
                  <img
                    style={{ width: "10em" }}
                    className="my-3"
                    src="./images/playstore.png"
                    alt=""
                  />
                </a>
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
      <a className="text-reset fw-bold" href="#">
        Medalert Life
      </a>
    </div>
    {/* Copyright */}
  </footer>
</>


    </>
  )
}

export default Footer
