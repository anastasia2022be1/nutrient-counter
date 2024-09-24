import { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchList from '../components/SearchList.jsx';
import { Container, Row, Col } from 'react-bootstrap'; // Импортируем компоненты Bootstrap

export default function SearchPage() {
  const [searchFood, setSearchFood] = useState('');

  return (
    <Container className="mt-5"> {/* Добавляем контейнер с верхним отступом */}
      <Row className="justify-content-center"> {/* Центрируем строку с поисковой строкой */}
        <Col md={8}> {/* Указываем размер колонки для средней ширины экрана */}
          <SearchBar setSearchFood={setSearchFood} />
        </Col>
      </Row>

      <Row className="mt-4"> {/* Добавляем верхний отступ для списка */}
        <Col>
          <SearchList searchFood={searchFood} />
        </Col>
      </Row>
    </Container>
  );
}

