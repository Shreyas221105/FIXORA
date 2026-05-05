import React from "react";

function ServiceCard(props) {

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
    <div style={cardStyle}>

      {/* IMAGE */}
      <img
        src={props.image}
        alt={props.title}
        style={imageStyle}
      />

      {/* TITLE */}
      <h2>{props.title}</h2>

      {/* DESCRIPTION */}
      <p>{props.description}</p>

      {/* PRICE */}
      <h3>{props.price}</h3>

      {/* RATING */}
      <p>⭐ {props.rating}</p>

      {/* BUTTON */}
      <button style={buttonStyle}>
        Book Now
      </button>

    </div>
  );
}

export default ServiceCard;