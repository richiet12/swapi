/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";

import * as styles from "./styles";

const Page = ({ children }) => {
  return (
    <React.Fragment>
      <Global styles={styles.global} />
      <div className="page" css={styles.page} children={children} />
    </React.Fragment>
  );
};

Page.prototype = {
  children: PropTypes.node
};

export default Page;
