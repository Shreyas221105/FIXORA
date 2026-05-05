import React from "react";

function Booking() {

  /* PAGE STYLE */
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    padding: "50px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  /* FORM CONTAINER */
  const formContainer = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
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
        <button style={buttonStyle}>
          Confirm Booking
        </button>

      </div>

    </div>
  );
}

export default Booking;