import React, { Fragment } from "react";
import { useSearch } from "../hooks/useSearch";

const Search = () => {
  const { text, onTextChange, onTextSubmit, onKeyPress } = useSearch();
  return (
    <Fragment>
      <input
        style={{ height: "50px", width: "700px", fontSize: "3rem" }}
        value={text}
        onChange={e => onTextChange(e)}
        onKeyDown={e => onKeyPress(e)}
      ></input>
      <button onClick={e => onTextSubmit(e)}>search</button>
    </Fragment>
  );
};

export default Search;
