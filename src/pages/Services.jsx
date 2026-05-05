import React from "react";
import ServiceCard from "../components/ServiceCard";

function Services() {

  /* PAGE STYLE */
  const pageStyle = {
    padding: "50px 40px",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  };

  /* CARD */
  const cardStyle = {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  /* IMAGE */
  const imageStyle = {
    width: "80px",
    marginBottom: "15px",
  };

  /* BUTTON */
  const buttonStyle = {
    marginTop: "15px",
    padding: "10px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  };

  return (
    <div style={pageStyle}>

      {/* PAGE TITLE */}
      <h1 style={titleStyle}>
        Our Services
      </h1>

      {/* SERVICES GRID */}
      <div style={gridStyle}>

        <ServiceCard
  image="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
  title="Electrician"
  description="Fan, wiring, switch & electrical repair."
  price="Starting at ₹299"
  rating="4.8"
/>

<ServiceCard
  image="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
  title="Plumber"
  description="Pipe leakage, tap fitting & bathroom work."
  price="Starting at ₹249"
  rating="4.7"
/>

<ServiceCard
  image="https://cdn-icons-png.flaticon.com/512/2897/2897785.png"
  title="AC Repair"
  description="AC installation, gas refill & servicing."
  price="Starting at ₹499"
  rating="4.9"
/>

<ServiceCard
  image="https://cdn-icons-png.flaticon.com/512/995/995053.png"
  title="House Cleaning"
  description="Deep cleaning for home and office."
  price="Starting at ₹399"
  rating="4.6"
/>

<ServiceCard
  image="https://cdn-icons-png.flaticon.com/512/942/942748.png"
  title="Carpenter"
  description="Furniture repair and woodwork services."
  price="Starting at ₹349"
  rating="4.8"
/>

<ServiceCard
  image="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
  title="Painting"
  description="Professional wall painting services."
  price="Starting at ₹699"
  rating="4.7"
/>

      </div>

    </div>
  );
}

export default Services;