/** @jsx jsx */
import { jsx } from "@emotion/core";

import CharacterResult from "../CharacterResult";

import * as styles from "./styles";

export default ({ results }) => {
  console.log(results);
  return (
    <div css={styles.results}>
      {results.map(result => {
        return <CharacterResult result={result} key={result.url} />;
      })}
    </div>
  );
};
