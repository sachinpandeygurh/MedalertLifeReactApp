import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer , toast } from "react-toastify";
const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhone] = useState("");
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("https://medalertlife-backend.onrender.com/api/auth/register", {
        email,
        phoneNo,
        password,
        // id=
      });
      // ////console.log(res.data.user._id)
      if (res && res?.data?.success) {
        // alert(res?.data?.message);
        toast(res?.data?.message, {
          position: "top-right",
          type: "success",
        });
        setTimeout(() => {
          navigate(`/myprofile/${phoneNo}`)
        }, 2500);

        localStorage.setItem('id',JSON.stringify(res?.data?.user));
      }else{
        // alert(res?.data?.message)
        toast(res?.data?.message, {
          position: "top-right",
          type: "error",
        });
      }
    } catch (error) {
      ////console.log(error);
      toast(error.message, {
        position: "top-right",
        type: "error",
      });
    }
  }; //8383475877

  return (
    <div className="my-5">
      <ToastContainer/>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <form className="card-body" onSubmit={handleSubmit}>
                <h1 className="text-center">Create Account</h1>
                <div className="form-group my-2">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="what's your email ?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group my-2">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="what's your phone number ?"
                    value={phoneNo}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group my-2">
                  <input
                    type="text"
                    name="password"
                    className="form-control"
                    placeholder="create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    Forgot Password
                  </Link>
                  <Link to="/login" className="text-dark btn btn-sm btn-info">
                   Already Have Account <b>Login</b>
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
export default SignUp;
