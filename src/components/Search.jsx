import React from "react";
import { useSearch } from "../hooks/useSearch";
import styled from "styled-components";

const SearchField = styled.input`
  width: 70%;
  max-width: 500px;
  font-size: 1.3rem;
  border-radius: 25px;
  border: 1px solid white;
  padding: 0.5em 1em;
  box-shadow: 0 0px 11px rgba(57, 63, 72, 0.15);
  margin: 0 auto 3rem;
  display: block;

  &:focus {
    outline: none;
    box-shadow: 0 0px 7px rgba(57, 63, 72, 0.15);
  }
`;

const Search = () => {
  const { text, onTextChange } = useSearch();
  return (
    <SearchField value={text} onChange={e => onTextChange(e)}></SearchField>
  );
};

export default Search;
