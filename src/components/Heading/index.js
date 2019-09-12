/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import * as styles from "./styles";

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

const Heading = ({ level, children }) => {
  const HeadingTag = headings[level - 1] || headings[headings.length - 1];

  return <HeadingTag css={styles[`heading${level}`]} children={children} />;
};

Heading.prototype = {
  level: PropTypes.number,
  children: PropTypes.node
};

export default Heading;
