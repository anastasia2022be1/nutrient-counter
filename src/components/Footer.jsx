import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="app-footer text-center mt-auto py-4">
      <Container>
        <Row>
          <Col>
            <h5>Follow me</h5>
            <div className="social-links">
              <a href="https://github.com/anastasia2022be1/nutrient-counter" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="GitHub">
                <FaGithub size={30} />
              </a>
              <a href="https://facebook.com/sevastyanova.a" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="Facebook">
                <FaFacebook size={30} />
              </a>
              <a href="https://linkedin.com/in/anastasia-sevastianova" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="LinkedIn">
                <FaLinkedin size={30} />
              </a>
              <a href="https://instagram.com/sevastianova_anastasia_" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="Instagram">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Nutrient App.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
