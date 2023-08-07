import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import '../css/index.css';
import "../css/App.css";
import "../css/style.css";
import "../css/responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Hero from "./Hero";
import UserList from "./Dashboard/userlist";
import Form from "./Form";
import Login from "./login";
import SignUp from "./SignUp";
import UserDash from "./Dashboard/userDash";
import Demo from "./Demo";
import Map from "./Map";
import NotFound from "./NotFound";
import UserQuery from "./UserQuery";
import Policy from "./Policy";
import TAndC from "./TAndC";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./ForgotPassword";
// import { Query } from "mongoose";
import GoogleAd from "./ads";

function App() {
  let data=localStorage.getItem("id");
  let user=JSON.parse(data);
  //console.log(user.role); 
  
  return (
    <div className="">
     
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  <Hero />
                  <Form />
                  <Services />
                  <Contact />
                  <Map/>
                </>
              }
            /> 
          </Route>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={
            <>
            <Contact/>
            <Map/>
            </>
          } />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp/>} />
{user?.role===1 ?
          (<Route exact path="/dashboard" element={
            <>
            <UserList/>
            <UserQuery/>
            </>
          } />) :
         ( <Route exact path="/myprofile/:phone" element={<UserDash/>}/>)
          }
          <Route exact path="/demo" element={<Demo/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/tnc" element={<TAndC/>}/>
          {/* <Route path="/forgot" element={<ForgotPassword/>}/> */}
          <Route path="/ads.txt" element={<GoogleAd/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
