import React from 'react'
import { Link } from 'react-router-dom'

const Map = () => {
  return (
    <main>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="india-flag mb-4">
                  <div className="flag">
                    <img src="images/ind-flag.svg" alt="" />
                  </div>
                  <div className="naame-lfag">India</div>
                </div>
                <div className="address mb-4">
                  <p>
                    
                    <p className='fw-bold'> 
                      
                      BDA complex near AIIMS Bhopal- 462026 <br />
                      Madhya Pradesh
                    </p>
                    <br />
                  </p>
                  <Link className='text-decoration-none text-primary p-3 fs-4' to="tel:9752625048">+91 9752625048</Link> <br />
                  <Link className='text-decoration-none text-primary p-3 fs-4' to="mailto:sachingurh@gmail.com">
                    info@medalertlife.com
                  </Link>
                </div>
                <div className="map">
                  <p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14667.774668053187!2d77.4562317!3d23.2087235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4325ee9eaa23%3A0x69f45535bdaec2!2sMedalert%20Life!5e0!3m2!1sen!2sin!4v1688246613910!5m2!1sen!2sin"
                      width="100%"
                      height={200}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title='medalert life bhopal'
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="india-flag mb-4">
                  <div className="flag">
                    <img src="images/ind-flag.svg" alt="" />
                  </div>
                  <div className="naame-lfag">India</div>
                </div>
                <div className="address mb-4">
                  <p>
                    {" "}
                    <p className='fw-bold'>
                    Bhawarkua Main Rd, Indrapuri Colony, Bhanwar Kuwa, Indore - 452014 <br/> Madhya Pradesh
                    </p>
                    <br /> 
                  </p>
                  <Link className='text-decoration-none text-primary p-3 fs-4' to="tel:9752625048">+91 9752 625 048</Link> <br />
                  <Link className='text-decoration-none text-primary p-3 fs-4' to="mailto:sachingurh@gmail.com">
                  info@medalertlife.com
                  </Link>
                </div>
                <div className="map">
                  <p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6171.075241962021!2d75.86463275252194!3d22.687090602064085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcefd3fa0725%3A0x7c70f357d1388c17!2sIndrapuri%20Colony%2C%20Bhanwar%20Kuwa%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1688247140410!5m2!1sen!2sin"
                      width="100%"
                      height={200}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title='medalert life bhopal'
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  )
}

export default Map
