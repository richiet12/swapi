/** @jsx jsx */
import { jsx } from "@emotion/core";

import * as styles from "./styles";

export default ({ searchTerm, handleSearchTermChange }) => {
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
// TODO Proptypes
