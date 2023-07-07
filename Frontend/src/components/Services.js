import React from 'react'

const Services = () => {
  return (
    <main >
  {/* ==============================Section for image =============== */}
  <div className="container my-5">
    {/* <h2 class="text-center">Our Services</h2> */}
{/*     
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <img
            src="../images/ambulance 2.jpeg"
            className="card-img-top h-25"
            alt="Ambulance Service"
          />
          <div className="card-body">
            <h5 className="card-title">Ambulance Service</h5>
            <p className="card-text">
              We provide 24/7 ambulance services for medical emergencies. Our
              ambulances are equipped with advanced medical equipment and
              staffed by trained medical professionals.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <img
            src="../images/ambulance 1.jpeg"
            className="card-img-top h-25"
            alt="Hospital Transfer"
          />
          <div className="card-body">
            <h5 className="card-title">Hospital Transfer</h5>
            <p className="card-text">
              We also provide hospital transfer services for patients who need
              to be transferred between hospitals or from their homes to the
              hospital.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <img
            src="../images/ambulance 2.jpeg"
            className="card-img-top h-25"
            alt="Hospital Transfer"
          />
          <div className="card-body">
            <h5 className="card-title">Hospital Transfer</h5>
            <p className="card-text">
              We also provide hospital transfer services for patients who need
              to be transferred between hospitals or from their homes to the
              hospital.
            </p>
          </div>
        </div>
      </div>
    </div> */}

  </div>
  {/* <section className="services" style={{ margin: "1em auto" }}>
    <div className="container">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Emergency Response</h5>
              <p className="card-text">
                We provide prompt and efficient emergency response services to
                ensure that our patients receive the care they need as quickly
                as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Medical Transportation</h5>
              <p className="card-text">
                Our medical transportation services ensure that patients can get
                to and from appointments and treatments comfortably and safely.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Bariatric Ambulance</h5>
              <p className="card-text">
                We have specially equipped bariatric ambulances to provide safe
                and comfortable transportation for patients with limited
                mobility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* ===========Discription section ========== */}
  {/* <section id="about-services" className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-5">Partnership Services</h2>
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
  </section> */}
  {/* Types of Ambulances avilable */}
  <section className="ambulancetype">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-around my-1">
          <h2 className="text-white text-capitalize ">
            types of ambulances available
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="card my-1">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-ambulance" /> Basic Life Support (BLS)
                Ambulance
              </h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                Our Basic Life Support (BLS) ambulance service is designed to
                provide essential medical care during transport. Equipped with
                oxygen, a defibrillator, and basic airway management tools, our
                ambulances are staffed by trained medical professionals who can
                respond to a wide range of medical emergencies.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card my-1">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-procedures" /> ICU Ambulance
              </h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                Our ICU ambulance service is staffed by a team of highly trained
                medical professionals, including doctors, nurses, and paramedics
                who are experienced in handling complex medical situations. They
                work together to provide continuous monitoring and treatment of
                the patient's vital signs, airway, and other critical medical
                functions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card my-1">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-cross" /> Deadbody Ambulance
              </h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                We understand that the transportation of a deceased loved one is
                a sensitive matter. That's why we provide compassionate support
                and work closely with funeral homes and mortuary transportation
                providers to ensure that every aspect is handled with dignity
                and respect. We are committed to easing the burden on families
                during this difficult time.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card my-1">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-weight" /> Bariatric Ambulance
              </h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                Our bariatric ambulance service is designed to provide safe and
                comfortable transportation for individuals who require
                specialized medical care due to their size or weight. Equipped
                with hydraulic lifts and reinforced stretchers, our ambulances
                are staffed by trained medical professionals who are experienced
                in providing care to bariatric patients.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card my-1">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-paw" /> Pets Ambulance
              </h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                {" "}
                Our pet ambulance service is designed to provide safe and
                comfortable transportation for pets in need of medical care or
                relocation. Our ambulances are equipped with specialized
                equipment and staffed by trained professionals who are
                experienced in providing care to pets of all kinds.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card my-1">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-map-signs" /> Outstation Ambulance
              </h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                Our outstation ambulance service is designed to provide safe and
                reliable transportation for patients who need to be transported
                over long distances. Equipped with the latest medical equipment
                and staffed by trained medical professionals, our ambulances are
                equipped to handle a wide range of medical emergencies.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card my-1">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-plane" /> Air Ambulance
              </h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                Booking our air ambulance service is easy and convenient. Simply
                call our 24/7 dispatch center, and our team will work with you
                to arrange for prompt and reliable transportation. We provide
                upfront pricing and transparent communication, so you can have
                peace of mind knowing you are receiving the best possible care
                at a fair price.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card my-1">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-wheelchair" /> Wheelchair Ambulance
              </h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                Our wheelchair ambulance service is designed to provide safe and
                comfortable transportation for patients who are unable to sit or
                move on their own. Our ambulances are equipped with specialized
                wheelchair ramps and restraints, as well as trained medical
                personnel who are experienced in providing care to patients with
                mobility challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card my-1">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-baby-carriage" /> Pediatric Ambulance
              </h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                Our pediatric ambulance service is designed to provide
                specialized medical transportation for infants and children who
                require medical care during transport. Our ambulances are
                equipped with specialized pediatric medical equipment and
                staffed by highly trained medical professionals who are
                experienced in providing care to pediatric patients.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default Services
