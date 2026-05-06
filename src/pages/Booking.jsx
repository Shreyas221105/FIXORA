import React, { useState } from "react";

function Booking() {

  const [message, setMessage] = useState("");

  const handleBooking = () => {

  const bookingData = {
    id: Date.now(),
    service: "Electrician",
    date: "10 May 2026",
    status: "Confirmed",
  };

  // OLD BOOKINGS
  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  // ADD NEW BOOKING
  existingBookings.push(bookingData);

  // SAVE AGAIN
  localStorage.setItem(
    "bookings",
    JSON.stringify(existingBookings)
  );

  alert("✅ Booking Confirmed!");

};


  /* PAGE STYLE */
  const pageStyle = {
  minHeight: "100vh",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "50px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

  /* FORM CONTAINER */
  const formContainer = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    position: "relative",
    zIndex: 1,
  };

  /* TITLE */
  const titleStyle = {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
  };

  /* INPUT */
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
  };

  /* BUTTON */
  const buttonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>

       <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>

      {/* FORM BOX */}
      <div style={formContainer}>

        <h1 style={titleStyle}>
          Book a Service
        </h1>

        {/* NAME */}
        <input
          type="text"
          placeholder="Enter your name"
          style={inputStyle}
        />

        {/* PHONE */}
        <input
          type="text"
          placeholder="Enter phone number"
          style={inputStyle}
        />

        {/* ADDRESS */}
        <input
          type="text"
          placeholder="Enter your address"
          style={inputStyle}
        />

        {/* SERVICE */}
        <select style={inputStyle}>

          <option>Select Service</option>
          <option>Electrician</option>
          <option>Plumber</option>
          <option>AC Repair</option>
          <option>Cleaning</option>
          <option>Carpenter</option>
          <option>Painting</option>

        </select>

        {/* DATE */}
        <input
          type="date"
          style={inputStyle}
        />

        {/* SUBMIT BUTTON */}
        <button
          onClick={handleBooking}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Confirm Booking
        </button>

        {
  message && (

    <p
      style={{
        marginTop: "20px",
        color: "green",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "18px",
      }}
    >
      {message}
    </p>

  )
}

      </div>

    </div>
  );
}

export default Booking;