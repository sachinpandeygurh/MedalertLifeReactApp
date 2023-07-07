import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  });

  const handleLogin = async () => {
    try {
      let result = await axios.post("http://localhost:5000/login", {
        phoneNo,
        password,
      });
      console.log(result);
      if (result && result?.data?.message) {
        if (result?.data?.user?._id)
          localStorage.setItem("id", JSON.stringify(result?.data?.user));
          
        result?.data?.user?.role === 1
          ? navigate("/dashboard")
          : navigate(`/myprofile/${result?.data?.user?.phoneNo}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register mt-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
