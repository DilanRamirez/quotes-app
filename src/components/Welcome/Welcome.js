import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import welcomePic from "../../assets/img/welcomePic.jpg";

export default function Welcome() {
  const goToHome = () => {};
  return (
    <div>
      <Container className="welcome-container">
        <h1>Welcome</h1>
        <p style={{ color: "#adadad" }}>Discover new famous quotes</p>
        <Image
          style={{
            height: "30%",
            padding: "10px",
            marginBottom: "7rem",
            marginTop: "5rem",
          }}
          src={welcomePic}
        />
        <Button
          style={{
            backgroundColor: "#ff4f5a",
            border: "#ff4f5a",
            width: "8rem",
            borderRadius: "1rem",
          }}
          onClick={() => (window.location.href = "Quotes")}
        >
          Start
        </Button>
      </Container>
    </div>
  );
}
