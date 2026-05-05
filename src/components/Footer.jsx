import React from 'react'
function Footer() {

  const footerStyle = {
    backgroundColor: "#111827",
    color: "white",
    textAlign: "center",
    padding: "25px",
    marginTop: "50px",
  };

  return (
    <footer style={footerStyle}>

      <h2>ServiceHub</h2>

      <p>
        Your one-stop solution for trusted home services.
      </p>

      <p style={{ marginTop: "10px", color: "#9ca3af" }}>
        © 2026 ServiceHub. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;