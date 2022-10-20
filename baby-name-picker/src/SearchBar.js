const SearchBar = ({ handleOnChange, input }) => {
  return (
    <div className="searchBar-container">
      <label className="searchBar-label" htmlFor="name">
        Search:
      </label>
      <input
        className="searchBar-input"
        placeholder="Search Name"
        id="name"
        type="text"
        value={input}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchBar;
