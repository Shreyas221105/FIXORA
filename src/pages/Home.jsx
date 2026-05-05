
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Home() {
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((data) => {
      setServices(data.users);
    });

}, []);

  /* HERO BACKGROUND */
  const heroStyle = {
    height: "90vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };

  /* DARK OVERLAY */
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  };

  /* HERO CONTENT */
  const contentStyle = {
    position: "relative",
    textAlign: "center",
    maxWidth: "800px",
    padding: "20px",
  };

  /* EXPLORE BUTTON */
  const buttonStyle = {
    padding: "14px 28px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  };

  /* SEARCH BAR CONTAINER */
  const searchContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "25px",
    flexWrap: "wrap",
  };

  /* SEARCH INPUT */
  const searchInput = {
    padding: "14px",
    width: "350px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "16px",
  };

  /* SEARCH BUTTON */
  const searchButton = {
    padding: "14px 22px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  };

  /* SERVICES SECTION */
  const servicesSection = {
    padding: "70px 40px",
    textAlign: "center",
    backgroundColor: "#f9fafb",
  };

  /* GRID */
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginTop: "40px",
  };

  /* SERVICE CARD */
  const cardStyle = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
  cursor: "pointer",
  transition: "0.3s",
  };

  /* BOOK BUTTON */
  const serviceButton = {
    marginTop: "15px",
    padding: "10px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  /* WHY CHOOSE US SECTION */
  const whySection = {
    backgroundColor: "#6b75784f",
    padding: "70px 40px",
    textAlign: "center",
  };

  /* WHY GRID */
  const whyGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    marginTop: "40px",
  };

  /* WHY CARD */
  const whyCard = {
    padding: "25px",
    backgroundColor: "#f3f4f6",
    borderRadius: "10px",
  };

  

  return (
    <div>

      {/* HERO SECTION */}
      <div style={heroStyle}>

        {/* DARK OVERLAY */}
        <div style={overlayStyle}></div>

        {/* HERO CONTENT */}
        <div style={contentStyle}>

          <h1 style={{ fontSize: "55px", marginBottom: "20px" }}>
            Find Trusted Home Services Near You
          </h1>

          <p style={{ fontSize: "20px", color: "#e5e7eb" }}>
            Electricians, Plumbers, AC Repair, Cleaning & more — all in one place
          </p>

          {/* SEARCH BAR */}
          <div style={searchContainer}>

            <input
              type="text"
              placeholder="Search electrician, plumber, AC repair..."
              style={searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button style={searchButton}>
              Search
            </button>

          </div>

          {/* FETCHED API DATA */}
{
  search && (

    <div
      style={{
        marginTop: "30px",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px",
        color: "black",
        maxWidth: "600px",
        marginInline: "auto",
      }}
    >

      {
        services
          .filter((item) =>
            item.firstName.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (

            <div
              key={item.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >

              <h3>{item.firstName} {item.lastName}</h3>

              <p>{item.email}</p>

            </div>

          ))
      }

    </div>

  )
}


          {/* EXPLORE BUTTON */}
          <Link to="/services">
            <button style={buttonStyle}>
              Explore Services
            </button>
          </Link>

        </div>
      </div>

      {/* POPULAR SERVICES */}
      <div style={servicesSection}>

        <h2 style={{ fontSize: "36px" }}>
          Popular Services
        </h2>

        <div style={gridStyle}>

          <div style={cardStyle} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.backgroundColor = "#dbeafe";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.backgroundColor = "white";
                }}>
            <h3>⚡ Electrician</h3>
            <p>Starting at ₹299</p>
            <p>⭐ 4.8 Rating</p>
            <button style={serviceButton}>Book Now</button>
          </div>

          <div style={cardStyle} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.backgroundColor = "#dbeafe";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.backgroundColor = "white";
                }}>
            <h3>🚰 Plumber</h3>
            <p>Starting at ₹249</p>
            <p>⭐ 4.7 Rating</p>
            <button style={serviceButton}>Book Now</button>
          </div>

          <div style={cardStyle} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.backgroundColor = "#dbeafe";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.backgroundColor = "white";
                }}>
            <h3>❄️ AC Repair</h3>
            <p>Starting at ₹499</p>
            <p>⭐ 4.9 Rating</p>
            <button style={serviceButton}>Book Now</button>
          </div>

          <div style={cardStyle} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.backgroundColor = "#dbeafe";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.backgroundColor = "white";
                }}>
            <h3>🧹 Cleaning</h3>
            <p>Starting at ₹399</p>
            <p>⭐ 4.6 Rating</p>
            <button style={serviceButton}>Book Now</button>
          </div>

          <div style={cardStyle} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.backgroundColor = "#dbeafe";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.backgroundColor = "white";
                }}>
            <h3>🔨 Carpenter</h3>
            <p>Starting at ₹349</p>
            <p>⭐ 4.8 Rating</p>
            <button style={serviceButton}>Book Now</button>
          </div>

          <div style={cardStyle} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.backgroundColor = "#dbeafe";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.backgroundColor = "white";
                }}>
            <h3>🎨 Painting</h3>
            <p>Starting at ₹699</p>
            <p>⭐ 4.7 Rating</p>
            <button style={serviceButton}>Book Now</button>
          </div>

        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div style={whySection}>

        <h2 style={{ fontSize: "36px" }}>
          Why Choose ServiceHub?
        </h2>

        <div style={whyGrid}>

          <div style={whyCard}>
            <h3>✅ Verified Professionals</h3>
            <p>Trusted and background-verified workers.</p>
          </div>

          <div style={whyCard}>
            <h3>⚡ Fast Service</h3>
            <p>Quick booking and instant response.</p>
          </div>

          <div style={whyCard}>
            <h3>💰 Affordable Pricing</h3>
            <p>Transparent and budget-friendly rates.</p>
          </div>

          <div style={whyCard}>
            <h3>🕒 24/7 Support</h3>
            <p>We are always here to help you.</p>
          </div>

        </div>
      </div>

    

    </div>
  );
}

export default Home;