/** @jsx jsx */
import { css } from '@emotion/core';

export const heading = css`
  font-weight: bold;
`;

export const heading1 = css`
  ${{ ...heading }}
  font-size: 3rem;
  margin: 3rem 0;
`;

export const heading2 = css`
  ${{ ...heading }}
  font-size: 2rem;
  margin: 2rem 0;
`;
