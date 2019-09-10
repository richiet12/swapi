/** @jsx jsx */
import { jsx } from "@emotion/core";

import Heading from "../Heading";

import * as styles from "./styles";

const Header = ({ children }) => {
  return (
    <header css={styles.header}>
      <Heading level={1}>{children}</Heading>
    </header>
  );
};

export default Header;
