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
import Flights from "./pages/Flights";
import BookingDetails from "./pages/BookingDetails";
import BookingConfirmation from "./pages/BookingConfirmation";
import MyBooking from "./pages/MyBooking";
import AdminDashboard from "./pages/AdminDashboard";
import AddTour from "./pages/AddTour";
import ViewTours from "./pages/ViewTours";
import ContactMessages from "./pages/ContactMessages";
import VisaApplications from "./pages/VisaApplications";
// import BookingSuccess from "./pages/BookingSuccess";


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
           <Route path="/Flights" element={<Flights />} />
           <Route path="/BookingDetails" element={<BookingDetails/>} />
           <Route path="/BookingConfirmation" element={<BookingConfirmation/>} />
           <Route path="/MyBooking" element={<MyBooking/>} />
           <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-tour" element={<AddTour />} />
        <Route path="/admin/view-tours" element={<ViewTours />} />
        <Route path="/admin/contact-messages" element={<ContactMessages />} />
        <Route path="/admin/visa-applications" element={<VisaApplications />} />
           {/* <Route path="/BookingSuccess" element={<BookingSuccess/>} /> */}


           


           


           


           
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
