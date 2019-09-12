import { css } from "@emotion/core";

import { mq } from "../../designs/theme";

export const results = css`
  display: flex;
  flex-direction: column;

  ${mq.m} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
