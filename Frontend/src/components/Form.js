import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [ambulanceType, setAmbulanceType] = useState("");
  const id = localStorage.getItem("id");
  let idd = "";
  if (id) idd = JSON.parse(id);
  let phone = "";
  if (idd) phone = idd.phoneNo;
  //console.log(phone);
  //console.log(phone);
  const currentDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
  const navigate = useNavigate();
  const handleSubmit = async () => {
    //console.log(name, address, phoneNo, ambulanceType);
    
    toast("Thank you for using medalert life Ambulance services", {
      position: "top-right",
      type: "success",
    });
    let result = await fetch("/api/booking/BookingData", {
      method: "POST",
      body: JSON.stringify({
        name,
        address,
        phoneNo:
          phone !== undefined && phone !== null && phone !== ""
            ? phone
            : phoneNo,
        ambulanceType,
        currentDate,
      }),
      headers: { "Content-type": "application/json" },
    });
    // const message = `Address:${address} ,
    // Name:${name},
    // Contact:${phoneNo},
    // Ambulance type:${ambulanceType}`;

    // const whatsappUrl =
    //   "https://api.whatsapp.com/send?phone=" +
    //   phone_number +
    //   "&text=" +
    //   encodeURIComponent(message);
    // window.open(whatsappUrl);
    !idd || idd === undefined || idd === null
      ? navigate("/signup")
      : navigate(`/myprofile/:${idd.phoneNo}`);
    // // callTo:`8319697083`
  };
  return (
    <>
      <ToastContainer position="right-top" />
      <div
        id="action-buts"
        style={{ backgroundColor: "#372163", color: "#f3f3f3" }}
      >
        <h1
          style={{
            backgroundColor: "#643cb5",
            padding: ".3em",
            color: "#f3f3f3",
          }}
        >
          book an ambulance
        </h1>
        <div className="underlines">
          <div className="line line-inl" />
          <div className="circle line-inl" />
          <div className="line line-inl" />
        </div>
        <div className="bookform">
          <form id="indexform">
            <p className="text-danger fs-6 fw-bold">
              Fill out the form and click{" "}
              <b className="text-white">Get Call Back</b> for immediate
              assistance.
            </p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Patient Current Location / Address"
              required=""
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="number"
              name="contact"
              placeholder="10 Digits Contact Number"
              required=""
              pattern="[0-9]{10}"
              title="Enter a valid phone number."
              minLength="10"
              maxLength="13"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <br />
            <select
              required=""
              name="ambulance"
              value={ambulanceType}
              onChange={(e) => setAmbulanceType(e.target.value)}
            >
              <option disabled="" selected="">
                Select Ambulance Type
              </option>
              <option>Basic ambulance</option>
              <option>ICU ambulance</option>
              <option>Deadbody ambulance</option>
              <option>Pediatric ambulance</option>
              <option>Outstation ambulance</option>
              <option>Air ambulance</option>
              {/* <option>Pet ambulance</option> */}
              <option>Wheelchair ambulance</option>
            </select>
            <br />
            <input
              className="submitbutton btn btn-lg"
              style={{ backgroundColor: "#643cb5", color: "#f3f3f3" }}
              type="button"
              name=""
              defaultValue="Get Call Back"
              id="submit"
              onClick={() => {
                handleSubmit();
                setTimeout(() => {
                  window.location.href = "tel:+919752625048";
                }, 1500);
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;

// <p
// className="callus d-md-grid fw-bolder"
// style={{ textAlign: "center", marginTop: 0 }}
// >
// Click and Call Now
// <a
//   href="tel:+919752625048"
//   onClick={`gtag_report_conversion()`}
//   className="book-form-a text-decoration-none text-danger fs-3 fw-bold"
// >
//   +91 9752 625 048{" "}
// </a>
// <br />
// OR
//    </p>
