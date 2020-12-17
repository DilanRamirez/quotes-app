import React, { useEffect, useState } from "react";
import { Container, Form, Image } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import "./App.css";

// Components
import Carousel_Header from "./components/Carousel/Carousel_Header";
import SingleQuote from "./components/SingleQuote/SingleQuote";
import Welcome from "./components/Welcome/Welcome";

// API
import { getImages, getQuotes } from "../src/api";

const Search = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="" className="advice-search" />
        <Form.Text className="text-muted">Any Advice ...</Form.Text>
      </Form.Group>
    </Form>
  );
};

const Home = () => {
  const [images, setImages] = useState([]);
  const [author, setAuthor] = useState([]);
  const [quote, setQuote] = useState([]);
  const [quoteAuthor, setQuoteAuthor] = useState([]);
  useEffect(() => {
    const getImagesCall = async () => {
      const response = await getImages();

      setImages(response.url);
      setAuthor(response.author);
    };

    const getQuotesCall = async () => {
      const response = await getQuotes();
      setQuote(response.text);
      setQuoteAuthor(response.author);
    };

    getImagesCall();
    getQuotesCall();
  }, []);

  return (
    <div>
      <Header />
      <div className="spacer"></div>
      <div style={{ padding: "15px", borderRadius: "2rem" }}>
        <Carousel_Header
          images={images}
          author={author}
          quote={quote}
          quoteAuthor={quoteAuthor}
        />
      </div>

      <div className="spacer"></div>

      <Container className="card-container">
        <SingleQuote
          images={images}
          author={author}
          quote={quote}
          quoteAuthor={quoteAuthor}
        />
      </Container>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="icon-title">
        <FaAngleLeft
          className="back-icon"
          onClick={() => (window.location.href = "/")}
        />
        <h4>Your Quotes</h4>
      </div>

      <Image
        src="https://avatars.dicebear.com/4.5/api/avataaars/tfd.svg"
        className="avatar"
      />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <div className="welcome">
          <Route path="/" exact component={Welcome} />
          <Route path="/Quotes" exact component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
