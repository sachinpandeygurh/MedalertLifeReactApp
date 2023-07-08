import React from "react";
import jQuery from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "../src/css/style.css";
import "../src/css/responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import main from "./components/main";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import UserList from "./components/Dashboard/userlist";
import Form from "./components/Form";
import Login from "./components/Dashboard/login";
import SignUp from "./components/SignUp";
import UserDash from "./components/Dashboard/userDash";
import Demo from "./components/Demo";
import Map from "./components/Map";
import NotFound from "./components/NotFound";
import UserQuery from "./components/UserQuery";
import Policy from "./components/Policy";
import TAndC from "./components/TAndC";
import "react-toastify/dist/ReactToastify.css";
// import { Query } from "mongoose";

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

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
