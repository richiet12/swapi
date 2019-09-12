import { css } from "@emotion/core";

import { colours } from "../../designs/theme";

export const result = css`
  border: 1px solid ${colours.fontBase};

  margin: 0 auto 4rem;
  padding: 2rem 3rem;

  width: 26rem;
`;

export const traitTable = css`
  width: 100%;
`;

export const traitTableHeader = css`
  display: none;
`;

export const traitTableCell = css`
  vertical-align: text-bottom;
  width: 35%;
`;

export const traitTableCellValue = css`
  line-height: 3rem;
  width: 65%;
`;
