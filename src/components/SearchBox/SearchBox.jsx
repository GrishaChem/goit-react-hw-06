import React from "react";

const SearchBox = ({ handleChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="" id="" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
