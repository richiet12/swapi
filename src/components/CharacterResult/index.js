/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import Heading from "../Heading";

import * as styles from "./styles";

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const CharacterResult = ({ result: { name, traits } }) => {
  return (
    <div css={styles.result}>
      <Heading level="3">{name}</Heading>

      <table css={styles.traitTable}>
        <thead>
          <tr>
            <th css={styles.traitTableHeader}>Trait</th>
            <th css={styles.traitTableHeader}>value</th>
          </tr>
        </thead>
        <tbody>
          {traits &&
            Object.keys(traits).map(key => {
              return (
                <tr key={key}>
                  <td css={styles.traitTableCell}>
                    <strong>{capitalize(key.replace("_", " "))}</strong>
                  </td>
                  <td css={styles.traitTableCellValue}>
                    {capitalize(traits[key])}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

CharacterResult.prototype = {
  result: PropTypes.arrayOf({
    name: PropTypes.string,
    traits: PropTypes.shape({
      films: PropTypes.string
    })
  })
};

export default CharacterResult;
