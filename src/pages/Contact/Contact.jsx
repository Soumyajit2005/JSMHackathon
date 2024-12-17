import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Contact.css' // Import custom CSS for animations

const Contact = () => {
  return (
    <div>
      <section className="contact-section text-center text-white py-20 bg-gradient-to-r from-purple-500 to-indigo-500">
        <Container>
          <h1 className="text-4xl font-bold animate__animated animate__fadeInDown">Contact Us</h1>
          <p className="text-xl mt-4 animate__animated animate__fadeInUp">We'd love to hear from you! Please fill out the form below to get in touch.</p>
        </Container>
      </section>

      <Container className="py-20">
        <section id="contact-form" className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 animate__animated animate__fadeInLeft">Get in Touch</h2>
          <Form className="animate__animated animate__fadeInUp">
            <Form.Group controlId="formName">
              <Form.Label className="font-semibold">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" className="py-2 px-4 rounded border border-gray-300" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-4">
              <Form.Label className="font-semibold">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" className="py-2 px-4 rounded border border-gray-300" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mt-4">
              <Form.Label className="font-semibold">Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" className="py-2 px-4 rounded border border-gray-300" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</Button>
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
                <a href="/books" className="text-blue-400 hover:text-blue-600">Books</a> |{" "}
                <a href="/characters" className="text-blue-400 hover:text-blue-600">Characters</a> |{" "}
                <a href="/spells" className="text-blue-400 hover:text-blue-600">Spells</a> |{" "}
                <a href="/contact" className="text-blue-400 hover:text-blue-600">Contact</a>
              </p>
              <p>
                Follow us on:{" "}
                <a href="#" className="text-blue-400 hover:text-blue-600">Facebook</a> |{" "}
                <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a> |{" "}
                <a href="#" className="text-blue-400 hover:text-blue-600">Instagram</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Contact