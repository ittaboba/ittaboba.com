const breakpoints = {
    sm: 0,
    md: 768,
    lg: 992,
    xl: 1200
};
  
export const mq = Object.keys(breakpoints)
    .map((key) => [key, breakpoints[key]])
    .reduce((prev, [key, breakpoint]) => {
        prev[key] = `@media (min-width: ${breakpoint}px)`;
        return prev;
    }, {});