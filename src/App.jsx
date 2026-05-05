import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import MyBooking from "./pages/MyBooking";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
        <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/mybookings" element={<MyBooking />} />
          </Routes>

        <Footer />
    </BrowserRouter>
  );
}

export default App;