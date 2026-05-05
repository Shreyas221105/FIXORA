import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "#1e40af",
        color: "white",
      }}
    >

      {/* Logo */}
      <div
            style={{
                display: "flex",
                 alignItems: "center",
                gap: "10px",
             }}
        >

    <span style={{ fontSize: "25px" }}>
    🛠️
    </span>

    <h2
            style={{
                margin: 0,
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
            }}
    >
    Service<span style={{ color: "#facc15" }}>Hub</span>
  </h2>


</div>

      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/services" style={{ color: "white", textDecoration: "none" }}>
          Services
        </Link>

        <Link to="/booking" style={{ color: "white", textDecoration: "none" }}>
          Booking
        </Link>

        <Link to="/mybookings" style={{ color: "white", textDecoration: "none" }}>
          My Bookings
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;