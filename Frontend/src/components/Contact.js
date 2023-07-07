import React, { useState } from "react";
import axios from "axios";
const Contact = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    try {
      const res = await axios.post("http://localhost:5000/contact", {
        data,
      });
     if(res.success){
      setData({...data,[data.email]:'',[data.firstname]:'',[data.lastname]:'',[data.message]:'',[data.phone]:''})
     }
    } catch (error) {console.log(error.message)}
  };
  const onChange = (e) => {
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
    console.log(data);
  };
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-0">Contact Us</h1>
        <p className="text-center">
          For any inquiries, please fill out the form or contact us at:
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="header-contact-us-form">
              <h3>Get In Touch</h3>
            </div>
            <div className="form">
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    className="cform  user"
                    placeholder="first name"
                    required
                    name="firstname"
                    id="name"
                    onChange={onChange}
                  />
                  <input
                    type="text"
                    className="cform password"
                    placeholder="last name"
                    name="lastname"
                    id="middle"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="cform email"
                    placeholder="email"
                    required=""
                    name="email"
                    id="email"
                    onChange={onChange}
                  />
                  <input
                    type="text"
                    className="cform number"
                    placeholder="mobile number"
                    required=""
                    name="phone"
                    id="mobile"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    // cols={35}
                    rows={3}
                    className="text-area px-3"
                    placeholder="write massage here..."
                    defaultValue={""}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group d-flex">
                  <input
                    type="button"
                    defaultValue="Submit"
                    name="Submit"
                    className="contact-us-page-submit btn btn-primary "
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6 d-grid justify-content-center">
            <p className="w-100  d-md-inline">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;{" "}
            </p>
            <div
              className="col d-grid justify-items-center"
              style={{ justifyItems: "center" }}
            >
              <div
                className="row border-dark w-100 d-flex align-items-center justify-content-between my-1 col-12"
                style={{ border: "1px solid gray" }}
              >
                <span className="col-4 fw-bold"> Call Us :</span>
                <input
                  type="button"
                  className=" bg-secondary h-100 border-0 justify-content-end col-8"
                  defaultValue="+91 9752 625 048"
                />
              </div>
              <div
                className="row border-dark w-100 d-flex align-items-center justify-content-between my-1 col-12"
                style={{ border: "1px solid gray" }}
              >
                <span className="col-4 fw-bold"> Email :</span>
                <input
                  type="button"
                  className=" bg-secondary h-100 border-0 justify-content-end col-8"
                  defaultValue="info@Medalert Life.com"
                />
              </div>
              <div
                className="row border-dark w-100 d-flex align-items-center justify-content-between my-1 col-12"
                style={{ border: "1px solid gray" }}
              >
                <span className="col-4 fw-bold"> Location :</span>
                <input
                  type="button"
                  className=" bg-secondary h-100 border-0 justify-content-end col-8 "
                  defaultValue="Bhopal MP 462001"
                />
              </div>
            </div>
            <p className="d-grid justify-content-center "></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
