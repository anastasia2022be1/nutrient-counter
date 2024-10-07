import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Импортируем иконки из react-icons
import { Container, Row, Col } from 'react-bootstrap'; // Импортируем компоненты из react-bootstrap

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center mt-5 py-3">
      <Container>
        <Row>
          <Col>
            <h5>Follow me</h5>
            <div className="social-links">
              {/* Социальные ссылки */}
              <a href="https://github.com/anastasia2022be1/nutrient-counter" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaGithub size={30} />
              </a>
              <a href="https://facebook.com/sevastyanova.a" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaFacebook size={30} />
              </a>
              <a href="https://linkedin.com/in/anastasia-sevastianova" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaLinkedin size={30} />
              </a>
              <a href="https://instagram.com/sevastianova_anastasia_" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
        </Row>
        {/* Уведомление о праве собственности */}
        <Row className="mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Nutrient App.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
