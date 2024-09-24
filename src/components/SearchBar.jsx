import { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap'; // Импортируем компоненты Bootstrap

export default function SearchBar({ setSearchFood }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setSearchFood(query);
  }

  return (
    <section>
      <Container className="mt-3"> {/* Контейнер для отступов и выравнивания */}
        <Row className="justify-content-center">
          <Col md={8}> {/* Ограничиваем ширину колонки */}
            <Form onSubmit={handleSubmit}> {/* Bootstrap форма */}
              <Form.Group controlId="searchInput">
                <Form.Control
                  type="text"
                  placeholder="Enter food to search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="mb-3" // Добавляем отступ снизу
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
