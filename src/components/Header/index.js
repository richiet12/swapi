/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import Heading from "../Heading";

import * as styles from "./styles";

const Header = ({ children }) => {
  return (
    <header css={styles.header}>
      <Heading level={1}>{children}</Heading>
    </header>
  );
};

Header.prototype = {
  children: PropTypes.node
};

export default Header;
