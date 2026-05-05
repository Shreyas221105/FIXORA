import React from "react";

function MyBooking() {

  /* PAGE STYLE */
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    padding: "50px 30px",
  };

  /* TITLE */
  const titleStyle = {
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "40px",
  };

  /* GRID */
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  };

  /* CARD */
  const cardStyle = {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  /* STATUS */
  const statusStyle = {
    color: "green",
    fontWeight: "bold",
    marginTop: "10px",
  };

  /* BUTTONS CONTAINER */
  const buttonContainer = {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  };

  /* BUTTON */
  const buttonStyle = {
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "white",
  };

  return (
    <div style={pageStyle}>

      {/* TITLE */}
      <h1 style={titleStyle}>
        My Bookings
      </h1>

      {/* BOOKINGS GRID */}
      <div style={gridStyle}>

        {/* BOOKING CARD 1 */}
        <div style={cardStyle}>

          <h2>⚡ Electrician Service</h2>

          <p>
            <strong>Name:</strong> Ahmad
          </p>

          <p>
            <strong>Date:</strong> 10 May 2026
          </p>

          <p>
            <strong>Address:</strong> J&k, Srinagar
          </p>

          <p style={statusStyle}>
            ✅ Confirmed
          </p>

          <div style={buttonContainer}>

            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#2563eb",
              }}
            >
              View Details
            </button>

            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#dc2626",
              }}
            >
              Cancel Booking
            </button>

          </div>

        </div>

        {/* BOOKING CARD 2 */}
        <div style={cardStyle}>

          <h2>🚰 Plumber Service</h2>

          <p>
            <strong>Name:</strong> Shreyas
          </p>

          <p>
            <strong>Date:</strong> 14 May 2026
          </p>

          <p>
            <strong>Address:</strong> Mumbai, Maharashtra
          </p>

          <p style={statusStyle}>
            ✅ Confirmed
          </p>

          <div style={buttonContainer}>

            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#2563eb",
              }}
            >
              View Details
            </button>

            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#dc2626",
              }}
            >
              Cancel Booking
            </button>

          </div>

        </div>


        <div style={cardStyle}>

          <h2>🚰 Plumber Service</h2>

          <p>
            <strong>Name:</strong> Aamir hamza
          </p>

          <p>
            <strong>Date:</strong> 04 June 2026
          </p>

          <p>
            <strong>Address:</strong> Delhi, India
          </p>

          <p style={statusStyle}>
            ✅ Confirmed
          </p>

          <div style={buttonContainer}>

            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#2563eb",
              }}
            >
              View Details
            </button>

            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#dc2626",
              }}
            >
              Cancel Booking
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyBooking;