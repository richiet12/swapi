/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import * as styles from './styles';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Heading = ({ level, children }) => {
  const HeadingTag = headings[level - 1] || headings[headings.length - 1];

  return <HeadingTag css={styles[`heading${level}`]} children={children} />;
};

export default Heading;
