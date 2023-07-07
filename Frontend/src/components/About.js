import React from 'react'
import wheelchair_lVgwzDpKh from '../images/dial4242-wheelchair_lVgwzDpKh.png'
import air_c3DnD5Pq_W from '../images/dial4242-air_c3DnD5Pq_W.png'
import outstation_a2IBaM1ijI from '../images/dial4242-outstation_a2IBaM1ijI.png'
import pediatric_3aK5l from '../images/dial4242-pediatric_3aK5l-QYC5.png'
import deadbody_F1VSKuAW8U from '../images/dial4242-deadbody_F1VSKuAW8U.png'
import dial4242icu_w19T_dl1X from '../images/dial4242-icu_w19T-dl1X.png'
import ambulanceicon from '../images/ambulanceicon.png'

import numimage1 from "../images/hospital.png" 
import numimage2 from "../images/dial4242-ambulancecount_oQyiK55lEh.png" 
import numimage3 from "../images/dial4242-paitents_5iVCKG9SsL.png" 
import numimage4 from "../images/dial4242-corporates_TfI1MlgaJ9.png" 
import numimage5 from "../images/dial4242-cities_7vG6kC4rEt.png" 


const About = () => {
  return (
    <>
     
     <>
  <section>
    <div className="container mt-5">
      <h1 className="text-center">About Us</h1>
      <p className="lead text-center">
        We are a team of dedicated professionals, committed to providing
        top-notch ambulance services to our community.
      </p>
      <div className="row mt-5">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                Our mission is to provide prompt, efficient and effective
                ambulance services to those in need. We strive to save lives and
                alleviate suffering through the provision of quality ambulance
                services.
              </p>
              <i className="fas fa-ambulance fa-3x d-block mt-3" />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Values</h5>
              <p className="card-text">
                Our values are centered around compassion, professionalism and
                accountability. We believe in treating every patient with
                dignity and respect and providing the best possible care in
                their time of need.
              </p>
              <i className="fas fa-heart fa-3x d-block mt-3" />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Team</h5>
              <p className="card-text">
                Our team is made up of highly trained paramedics and support
                staff who work tirelessly to provide the highest standard of
                care to our patients. We believe in working together as a team
                to achieve our common goal of saving lives and alleviating
                suffering.
              </p>
              <i className="fas fa-users fa-3x d-block mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /* ================process of booking end=============* / */}
  <hr />
  {/* /* ================Services Section ================ * / */}
  <section className="container">
    <div className="services con-type" style={{ opacity: 1, top: 0 }}>
      <h2>Our Services</h2>
      <div className="underlines">
        <div className="line line-inl" />
        <div className="circle line-inl" />
        <div className="line line-inl" />
      </div>
      <div className="con-type-cont" style={{ opacity: 1, top: 43 }}>
        <div className="services-in px-5 mx-3 shadow-none">
          <div className="services-det">
            <div className="serimg">
              <img src={ambulanceicon} //"../images/ambulanceicon.png" 
              />
            </div>
            <p className="text capitalize">Basic ambulance</p>
            <a href="https://medalertlife.com/#">
              <p className="text rmore text-decoration-none">Avilable</p>
            </a>
          </div>
        </div>
        <div className="services-in px-5 mx-3 shadow-none">
          <div className="services-det">
            <div className="serimg">
              <img src={dial4242icu_w19T_dl1X} // "../images/dial4242-icu_w19T-dl1X.png" 
              />
            </div>
            <p className="text capitalize">ICU ambulance</p>
            <a href="https://medalertlife.com/#">
              <p className="text rmore text-decoration-none">Avilable</p>
            </a>
          </div>
        </div>
        <div className="services-in px-5 mx-3 shadow-none">
          <div className="services-det">
            <div className="serimg">
              <img src={deadbody_F1VSKuAW8U} // "../images/dial4242-deadbody_F1VSKuAW8U.png"
               />
            </div>
            <p className="text capitalize">deadbody ambulance</p>
            <a href= "https://medalertlife.com/#">
              <p className="text rmore text-decoration-none">Avilable</p>
            </a>
          </div>
        </div>
        <div className="services-in px-5 mx-3 shadow-none">
          <div className="services-det">
            <div className="serimg">
              <img src={pediatric_3aK5l} //"../images/dial4242-pediatric_3aK5l-QYC5.png" 
              />
            </div>
            <p className="text capitalize">pediatric ambulance</p>
            <a href="https://medalertlife.com/#">
              <p className="text rmore text-decoration-none">Avilable</p>
            </a>
          </div>
        </div>
        <div className="services-in px-5 mx-3 shadow-none">
          <div className="services-det">
            <div className="serimg">
              <img src={outstation_a2IBaM1ijI} //"../images/dial4242-outstation_a2IBaM1ijI.png" 
              />
            </div>
            <p className="text capitalize">Outstation ambulance</p>
            <a href="https://medalertlife.com/#">
              <p className="text rmore text-decoration-none">Avilable</p>
            </a>
          </div>
        </div>
        <div className="services-in px-5 mx-3 shadow-none">
          <div className="services-det">
            <div className="serimg">
              <img src={air_c3DnD5Pq_W}  //"../images/dial4242-air_c3DnD5Pq_W.png"
               />
            </div>
            <p className="text capitalize">air ambulance</p>
            <a href="https://medalertlife.com/#">
              <p className="text rmore text-decoration-none">Avilable</p>
            </a>
          </div>
        </div>
        {/* <div class="services-in px-5 mx-3 shadow-none">
  <div class="services-det">
    <div class="serimg"><img src="../images/dial4242-pet_UgqnNX70L.png"></div>
    <p class="text capitalize">pet ambulance</p>
    <a href="https://medalertlife.com/#">
      <p class="text rmore text-decoration-none">not avilable</p>
    </a>
  </div>
</div> */}
        <div className="services-in px-5 mx-3 shadow-none">
          <div className="services-det">
            <div className="serimg">
              <img src={wheelchair_lVgwzDpKh} //"../images/dial4242-wheelchair_lVgwzDpKh.png"
               />
            </div>
            <p className="text capitalize">wheelchair ambulance</p>
            <a href="https://medalertlife.com/#">
              <p className="text rmore text-decoration-none">Avilable</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container my-5">
    <div className="counter con-type" style={{ opacity: 1, top: 0 }}>
      <div className="con-type-cont about-main" style={{}}>
        <div className="counter-in shadow">
          <div className="counter-det">
            <img src={numimage1 } //"../images/hospital.png" 
            />
            <p className="number count p1">7</p> <br />
            <p className="text capitalize">Hospitals connected</p>
          </div>
        </div>
        <div className="counter-in shadow">
          <div className="counter-det">
            <img src={numimage2 } //"../images/dial4242-ambulancecount_oQyiK55lEh.png" 
            />
            <p className="number count p2">50</p> <br />
            <p className="text capitalize">Ambulances</p>
          </div>
        </div>
        <div className="counter-in shadow">
          <div className="counter-det">
            <img src={numimage3 } //"../images/dial4242-paitents_5iVCKG9SsL.png" 
            />
            <p className="number count p3">20</p> <br />
            <p className="text capitalize">Medical Transportations</p>
          </div>
        </div>
        <div className="counter-in shadow">
          <div className="counter-det">
            <img src={numimage4 } //"../images/dial4242-corporates_TfI1MlgaJ9.png" 
            />
            <p className="number count p4">30</p> <br />
            <p className="text capitalize">Corporates Members</p>
          </div>
        </div>
        <div className="counter-in shadow">
          <div className="counter-det">
            <img src={numimage5 } //"../images/dial4242-cities_7vG6kC4rEt.png" 
            />
            <p className="number count p5">2</p> <br />
            <p className="text capitalize">Bhopal City </p>
            <strong>Bhopal &amp; Indore</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ===========Discription section ========== */}
  <section id="about-services" className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-5">About Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <i className="fas fa-ambulance fa-4x mb-3" />
              <h3 className="card-title">Emergency Response</h3>
              <p className="card-text">
                Our team is available 24/7 to respond to any medical emergency.
                We provide fast and reliable ambulance services to ensure you
                get the medical care you need as quickly as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <i className="fas fa-stethoscope fa-4x mb-3" />
              <h3 className="card-title">Diagnostic Services</h3>
              <p className="card-text">Available soon</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <i className="fas fa-medkit fa-4x mb-3" />
              <h3 className="card-title">Medical Treatment</h3>
              <p className="card-text">
                We provide a variety of medical treatments, including emergency
                care, surgery, and rehabilitation. Our experienced healthcare
                professionals use the latest medical technology to ensure the
                best possible outcome for our patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>


    </>
  )
}

export default About
