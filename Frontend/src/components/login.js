import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Login = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //login
  // const [email,setEmail]=useState("");

  useEffect(() => {
    const customer = localStorage.getItem("user");
    // if (id) {
    //   navigate(`/myprofile/${idd}`);
    // }
  },[]);

  const handleLogin = async () => {
    try {
      let result = await axios.post("/api/auth/login", {
        phoneNo,
        password,
      });
      console.log(result);
      if (result && result?.data?.message) {

        toast(result?.data?.message, {
          position: "top-right",
          type: "success",
        });

       setTimeout(() => {
        if (result?.data?.user?._id)
        localStorage.setItem("id", JSON.stringify(result?.data?.user));
     
        result?.data?.user?.role === 1
          ? navigate("/dashboard")
          : navigate(`/myprofile/${result?.data?.user?.phoneNo}`);
       }, 2000);
        
        
      }
    
    } catch (error) {
      console.log(error);
      toast(error.message, {
        position: "top-right",
        type: "error",
      });
    }
  };

  return (
    <div className="register mt-5">
      <ToastContainer position="right-top" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center">Login </h1>
                <div className="form-group">
                  <input
                    className="form-control inputBox my-3"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    type="text"
                    placeholder="What's your phone number ?"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control  inputBox my-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="What's your  Password ?"
                  />
                </div>
                <div className="form-group d-flex justify-content-center">
                  <button
                    className="form-control btn btn-primary w-25 text-white appButton my-3"
                    onClick={handleLogin}
                    type="button"
                    placeholder="Submit"
                  >
                    Submit
                  </button>
                </div>
                <h4 className="d-flex justify-content-between">
                  <Link to="/" className="text-dark btn btn-sm btn-danger">
                    Forgot Password
                  </Link>
                  <Link to="/signup" className="text-dark btn btn-sm btn-info">
                    First Time User <b>Signup</b>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
