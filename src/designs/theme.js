import { mediaQueries } from "./utils/mediaQueries";

export const colours = {
  brand: "#ffe300",
  brand2: "#333",
  base: "#1c1e22",
  fontBase: "#fff"
};

export const fonts = {
  base: "arial"
};

// breakpoints
// Small devices (landscape phones, 576px and up)
// Medium devices (tablets, 768px and up)
// Large devices (desktops, 992px and up)
// Extra large devices (large desktops, 1200px and up)
const breakpoints = { s: 576, m: 768, l: 992, xl: 1200 };

export const mq = mediaQueries(breakpoints);
