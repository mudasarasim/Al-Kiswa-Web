import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Hotel from "./pages/Hotel";
import Visa from "./pages/Visa";
import Holidays from "./pages/Holidays";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import GetVisa from "./pages/GetVisa";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/hotel" element={<Hotel />} />
           <Route path="/visa" element={<Visa />} />
           <Route path="/holidays" element={<Holidays />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/getvisa" element={<GetVisa />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
