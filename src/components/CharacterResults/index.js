/** @jsx jsx */
import { jsx } from "@emotion/core";

import CharacterResult from "../CharacterResult";

import * as styles from "./styles";

export default () => {
  return (
    <div css={styles.results}>
      {[1, 2, 3].map(item => {
        return <CharacterResult />;
      })}
    </div>
  );
};
