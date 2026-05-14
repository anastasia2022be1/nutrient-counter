import { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchList from '../components/SearchList.jsx';

export default function SearchPage() {
  const [searchFood, setSearchFood] = useState('');

  return (
    <div className="page-stack">
      <div className="page-heading">
        <h1>Find Food</h1>
        <p>Search the USDA food database and choose products for your plan.</p>
      </div>
      <SearchBar setSearchFood={setSearchFood} />
      <SearchList searchFood={searchFood} />
    </div>
  );
}
