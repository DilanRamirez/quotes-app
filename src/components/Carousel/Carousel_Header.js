import React, { useEffect, useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import Typed from "react-typed";

export default function Carousel_Header({
  images,
  author,
  quote,
  quoteAuthor,
}) {
  const imageItem =
    images.length > 0
      ? images.map((image, key) => (
          <Carousel.Item key={key}>
            <img
              className="d-block w-100 carousel-img"
              src={image}
              alt="First slide"
              style={{ height: "30vh !important", width: "40vh !important" }}
            />
            <Carousel.Caption className="caption d-flex h-100-2 align-items-center justify-content-center">
              <div className="quote-info">
                <h1 className="quote-text">{quote[key]}</h1>
                <h4 className="author-text"> - {quoteAuthor[key]}</h4>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      : null;

  return (
    <div>
      <Container className="container-carousel">
        <Carousel interval={8000}>{imageItem}</Carousel>
      </Container>
    </div>
  );
}
