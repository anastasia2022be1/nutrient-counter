import { useState } from "react"
export default function SearchBar({ setSearchFood }) {
  const [query, setQuery] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    setSearchFood(query);
    //console.log(searchFood);
    
  };
  return (
<section>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value) }
        />

        <button type="submit">Search</button>
      </form>
      </section>

  )
}
