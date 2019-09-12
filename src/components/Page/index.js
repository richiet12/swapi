/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import React from "react";
import * as styles from "./styles";

const Page = ({ children }) => {
  return (
    <React.Fragment>
      <Global styles={styles.global} />
      <div className="page" css={styles.page} children={children} />
    </React.Fragment>
  );
};

export default Page;
