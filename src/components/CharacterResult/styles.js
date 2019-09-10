import { css } from "@emotion/core";

import { colours } from "../../designs/theme";

export const result = css`
  margin: 0 auto;
  width: 30rem;
  border: 1px solid ${colours.fontBase};
  margin-bottom: 4rem;
  padding: 2rem 3rem;
`;

export const traitTable = css`
  width: 100%;
`;

export const traitTableHeader = css`
  display: none;
`;

export const traitTableCell = css`
  width: 35%;
`;

export const traitTableCellValue = css`
  width: 65%;
  line-height: 3rem;
`;
