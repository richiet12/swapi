/** @jsx jsx */
import { jsx } from "@emotion/core";

import * as styles from "./styles";

export default ({ searchTerm, handleSearchTermChange }) => {
  return (
    <form css={styles.search}>
      <label>
        <span css={styles.labelText}> text search</span>
        <input
          value={searchTerm}
          type="text"
          css={styles.input}
          placeholder="e.g. luke"
          onChange={handleSearchTermChange}
        />
      </label>
    </form>
  );
};
// TODO Proptypes
