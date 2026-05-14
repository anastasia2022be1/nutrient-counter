import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, InputGroup } from 'react-bootstrap';

export default function SearchBar({ setSearchFood }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setSearchFood(query.trim());
  }

  return (
    <Form onSubmit={handleSubmit} className="search-panel">
      <Form.Label htmlFor="searchInput">Search foods</Form.Label>
      <InputGroup>
        <Form.Control
          id="searchInput"
          type="text"
          placeholder="Enter a food name, e.g. apple"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="success" type="submit">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}

SearchBar.propTypes = {
  setSearchFood: PropTypes.func.isRequired,
};
