/** @jsx jsx */
import { jsx } from "@emotion/core";

import * as styles from "./styles";

export default () => {
  return (
    <form css={styles.search}>
      <label>
        <span css={styles.labelText}> text search</span>
        <input type="text" css={styles.input} placeholder="e.g. luke" />
      </label>
    </form>
  );
};
