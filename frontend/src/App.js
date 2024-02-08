import React from "react";
import { Routes, Route } from "react-router";
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import AddEmployee from "./markup/pages/admin/AddEmployee";

// Import the css files 
import "./assets/tamplet-assets/css/bootstrap.css";
import "./assets/tamplet-assets/css/style.css";
import "./assets/tamplet-assets/css/responsive.css";
import "./assets/tamplet-assets/css/color.css";


// Import the custom css file 
import "./assets/tamplet-assets/css/custom.css";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-employee" element={<AddEmployee />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
