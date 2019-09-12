/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import * as styles from "./styles";

const CharacterSearch = ({ searchTerm, handleSearchTermChange }) => {
  const onSubmit = event => {
    event.preventDefault();
    handleSearchTermChange(event);
  };

  return (
    <form css={styles.search} onSubmit={onSubmit}>
      <label>
        <span css={styles.labelText}>Search by text</span>
        <input
          autoFocus
          value={searchTerm}
          type="text"
          css={styles.input}
          placeholder="e.g. Luke Skywalker"
          onChange={handleSearchTermChange}
        />
      </label>
    </form>
  );
};

CharacterSearch.prototype = {
  searchTerm: PropTypes.string,
  handleSearchTermChange: PropTypes.func
};

export default CharacterSearch;
