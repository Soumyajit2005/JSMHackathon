import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Home.css"; // Import custom CSS for animations
import home1 from "../../assets/Home/homeimg1.jpg";
import home2 from "../../assets/Home/homeimg2.jpg";
import home3 from "../../assets/Home/homeHouses.jpg"
import home4 from "../../assets/Home/homeSpells.jpg"
import homeTransparent from "../../assets/Home/homeimgTransparent.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center text-white py-20 bg-gradient-to-r from-purple-500 to-indigo-500 relative">
        <Container>
          <h1 className="text-4xl font-bold animate__animated animate__fadeInDown">
            Step Into the World of Magic and Wonder
          </h1>
          <p className="text-xl mt-4 animate__animated animate__fadeInUp">
            Explore books, unravel characters, discover houses, and master
            spells.
          </p>
          <div className="hero-buttons mt-6 animate__animated animate__fadeInUp">
            <Button
              variant="primary"
              as={Link}
              to="/overview"
              className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enter the World
            </Button>
            <Button
              variant="secondary"
              as={Link}
              to="/contact"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Contact Us
            </Button>
          </div>
          <img
            src={homeTransparent}
            alt="Harry Potter"
            className="absolute bottom-0 right-0 w-1/3 opacity-75 animate__animated animate__fadeInUp"
          />
        </Container>
      </section>

      <Container className="py-20">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 animate__animated animate__fadeInLeft">
            What This Site Offers
          </h2>
          <Row>
            <Col
              xs={12}
              sm={6}
              md={3}
              className="animate__animated animate__zoomIn"
            >
              <Card className="mb-8 shadow-lg">
                <Card.Img className="h-[220px]" variant="top" src={home1} alt="Books" />
                <Card.Body>
                  <Card.Title className="text-xl font-bold">Books</Card.Title>
                  <Card.Text className="mt-2">
                    Dive into stories that captivate.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={3}
              className="animate__animated animate__zoomIn"
            >
              <Card className="mb-8 shadow-lg">
                <Card.Img className="h-[220px]" variant="top" src={home2} alt="Characters" />
                <Card.Body>
                  <Card.Title className="text-xl font-bold">
                    Characters
                  </Card.Title>
                  <Card.Text className="mt-2">
                    Learn about the magical beings.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={3}
              className="animate__animated animate__zoomIn"
            >
              <Card className="mb-8 shadow-lg">
                <Card.Img className="h-[220px]" variant="top" src={home3} alt="Houses" />
                <Card.Body>
                  <Card.Title className="text-xl font-bold">Houses</Card.Title>
                  <Card.Text className="mt-2">Discover the legacies.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={3}
              className="animate__animated animate__zoomIn"
            >
              <Card className="mb-8 shadow-lg">
                <Card.Img className="h-[220px]" variant="top" src={home4} alt="Spells" />
                <Card.Body>
                  <Card.Title className="text-xl font-bold">Spells</Card.Title>
                  <Card.Text className="mt-2">
                    Unveil the secrets of magic.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Call-to-Action Section */}
        <section id="cta" className="mb-20 text-center">
          <h2 className="text-3xl font-semibold mb-8 animate__animated animate__fadeInLeft">
            Your Adventure Awaits
          </h2>
          <div className="cta-buttons animate__animated animate__fadeInUp">
            <Button
              variant="primary"
              as={Link}
              to="/books"
              className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore Books
            </Button>
            <Button
              variant="primary"
              as={Link}
              to="/characters"
              className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Meet Characters
            </Button>
            <Button
              variant="primary"
              as={Link}
              to="/houses"
              className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Discover Houses
            </Button>
            <Button
              variant="primary"
              as={Link}
              to="/spells"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Learn Spells
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 animate__animated animate__fadeInLeft">
            Have Questions?
          </h2>
          <Form className="animate__animated animate__fadeInUp">
            <Form.Group controlId="formName">
              <Form.Label className="font-semibold">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="py-2 px-4 rounded border border-gray-300"
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-4">
              <Form.Label className="font-semibold">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded border border-gray-300"
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mt-4">
              <Form.Label className="font-semibold">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                className="py-2 px-4 rounded border border-gray-300"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </Button>
          </Form>
        </section>
      </Container>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <Container>
          <Row>
            <Col>
              <p className="mb-2">
                Quick Links:{" "}
                <Link to="/books" className="text-blue-400 hover:text-blue-600">
                  Books
                </Link>{" "}
                |{" "}
                <Link
                  to="/characters"
                  className="text-blue-400 hover:text-blue-600"
                >
                  Characters
                </Link>{" "}
                |{" "}
                <Link
                  to="/spells"
                  className="text-blue-400 hover:text-blue-600"
                >
                  Spells
                </Link>{" "}
                |{" "}
                <Link
                  to="/contact"
                  className="text-blue-400 hover:text-blue-600"
                >
                  Contact
                </Link>
              </p>
              <p>
                Follow us on:{" "}
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Facebook
                </a>{" "}
                |{" "}
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>{" "}
                |{" "}
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Instagram
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
