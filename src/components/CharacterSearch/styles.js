import { css } from "@emotion/core";

import { colours } from "../../designs/theme";

export const search = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const input = css`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${colours.base};
  color: ${colours.brand};
  font-size: 3rem;
  margin-bottom: 5rem;
`;

export const labelText = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
