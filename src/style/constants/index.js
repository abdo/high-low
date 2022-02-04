export const screenSizes = {
  mobile: 425,
  tablet: 768,
  miniLaptop: 1000,
  laptop: 1440,
  desktop: 1800,
};

export const devices = {
  mobile: `(max-width: ${screenSizes.mobile + 50}px)`,
  tablet: `(max-width: ${screenSizes.tablet}px)`,
  miniLaptop: `(max-width: ${screenSizes.miniLaptop}px)`,
  laptop: `(max-width: ${screenSizes.laptop}px)`,
  desktop: `(min-width: ${screenSizes.laptop}px)`,
  maxDesktop: `(min-width: ${screenSizes.desktop}px)`,
};
