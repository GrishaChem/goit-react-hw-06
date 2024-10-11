import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, selectFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const SearchBox = ({}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => dispatch(search(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
