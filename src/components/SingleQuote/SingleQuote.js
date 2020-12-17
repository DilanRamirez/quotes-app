import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function SingleQuote({ images, author, quote, quoteAuthor }) {
  const [icons, setIcons] = useState([]);
  const [findQuote, setFindQuote] = useState("");

  const changeHeart = (key) => {
    setIcons((item) => ({ [key]: !item[key] }));
  };

  const quoteItem =
    images.length > 0
      ? images.map((image, key) => (
          <LazyLoad height={200} offset={100} key={key} id={key}>
            <Card
              className=" single-quote"
              onClick={() => setFindQuote(quote[key])}
            >
              <Container className="d-flex flex-row">
                <Card.Img
                  variant="top"
                  src={image}
                  style={{
                    height: 55,
                    width: 55,
                    display: "flex",
                    margin: "auto",
                    borderRadius: 12,
                  }}
                />

                <Card.Body>
                  <div>
                    <p className="single-quote-text">
                      {quote[key]} -{" "}
                      <p style={{ color: "rgb(43 43 43)", fontSize: "11px" }}>
                        {author[key]}
                      </p>
                    </p>
                  </div>
                </Card.Body>

                <h4 style={{ display: "flex", margin: "auto" }}>
                  <i id={key} onClick={() => changeHeart(key)}>
                    {icons[key] ? <FaHeart /> : <FiHeart />}
                  </i>
                </h4>
              </Container>
            </Card>
          </LazyLoad>
        ))
      : null;
  return <div>{quoteItem}</div>;
}
