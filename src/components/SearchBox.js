import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="searchbox-container">
      <input
        className="input"
        type="search"
        placeholder="moon"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
