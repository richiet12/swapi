/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import CharacterResult from "../CharacterResult";

import * as styles from "./styles";

const CharacterResults = ({ results }) => {
  return (
    <div css={styles.results}>
      {results.map(result => {
        return <CharacterResult result={result} key={result.name} />;
      })}
    </div>
  );
};

CharacterResults.prototype = {
  result: PropTypes.arrayOf({
    name: PropTypes.string,
    traits: PropTypes.shape({
      films: PropTypes.string
    })
  })
};

export default CharacterResults;
