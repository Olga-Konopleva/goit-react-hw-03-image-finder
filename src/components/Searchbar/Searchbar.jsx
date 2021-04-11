import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  const handleSearchQuery = e => setSearchQuery(e.target.value);
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSearchQuery}
        />
      </form>
    </header>
  );
};

export default Searchbar;
