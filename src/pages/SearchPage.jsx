import { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchList from '../components/SearchList.jsx';

export default function SearchPage() {
    const [searchFood, setSearchFood] = useState('');
  return (
    <>
      <SearchBar setSearchFood={setSearchFood} />

      <SearchList searchFood={searchFood} />
     
    </>
  );
}
