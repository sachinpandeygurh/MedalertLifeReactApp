import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const handleSubmit = () => {
    console.log(email, phone);
  };

  return (
    <div className="my-5">
      {/* <ToastContainer/> */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <form className="card-body" onSubmit={handleSubmit}>
                <h4 className="text-center">Forgot Password</h4>
                <div className="form-group my-2">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="what's your email ?"
                    value={email}
                    //   onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <p className="text-dark m-auto">OR</p>
                <div className="form-group my-2">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="what's your phone number ?"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-group my-2 d-flex justify-content-center">
                  <input
                    type="submit"
                    className="form-control btn btn-sm btn-primary w-25"
                    placeholder="submit"
                  />
                </div>
                <h4 className="d-flex justify-content-between">
                  <Link to="/" className="text-dark btn btn-sm btn-danger">
                    Password Yaad agaya
                  </Link>
                  <Link to="/signup" className="text-dark btn btn-sm btn-info">
                    First Time User <b>Signup</b>
                  </Link>
                </h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
