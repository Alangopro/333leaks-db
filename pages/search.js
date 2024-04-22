import { useState } from 'react';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (nick) => {
    try {
      const response = await fetch(`/api/search?nick=${nick}`);
      const data = await response.json();

      setSearchResult(data.data);
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResult('An error occurred while searching.');
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <div>{searchResult}</div>
    </div>
  );
};

export default SearchPage;
