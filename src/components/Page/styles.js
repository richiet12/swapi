/** @jsx jsx */
import { css } from "@emotion/core";
import { fonts, colours } from "../../designs/theme";

export const page = css`
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 120rem;
`;

export const global = css`
  html {
    font-family: ${fonts.base};
    font-size: 62.5%; /* 10px = 1rem! */
  }

  body {
    background: ${colours.brand2};
    color: ${colours.fontBase};
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;
