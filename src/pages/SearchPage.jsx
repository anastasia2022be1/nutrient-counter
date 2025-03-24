import { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchList from '../components/SearchList.jsx';
import { Row, Col } from 'react-bootstrap'; // container не нужен

export default function SearchPage() {
  const [searchFood, setSearchFood] = useState('');

  return (
    <div className="h-100">
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <SearchBar setSearchFood={setSearchFood} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <SearchList searchFood={searchFood} />
        </Col>
      </Row>
    </div>
  );
}
