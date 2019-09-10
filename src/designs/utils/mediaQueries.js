export const mediaQueries = breakpoints => {
  Object.keys(breakpoints).forEach(
    key => (breakpoints[key] = `@media (min-width: ${breakpoints[key]}px)`)
  );
  return breakpoints;
};
