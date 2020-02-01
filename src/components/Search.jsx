import React, { Fragment } from "react";
import { useSearch } from "../hooks/useSearch";

const Search = () => {
  const { text, onTextChange } = useSearch();
  return (
    <Fragment>
      <input
        style={{ height: "50px", width: "700px", fontSize: "3rem" }}
        value={text}
        onChange={e => onTextChange(e)}
      ></input>
    </Fragment>
  );
};

export default Search;
