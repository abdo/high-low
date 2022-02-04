import { devices } from 'style/constants';
import styled from 'styled-components';
import theme from 'style/theme';

const fontSizes = {
  beast: '88px',
  h1: '56px',
  h2: '36px',
  h3: '28px',
  h4: '22px',
  h5: '18px',
  bLarge: '18px',
  bMedium: '16px',
  bSmall: '14px',
  bExtraSmall: '12px',
  micro: '11px',
};

const lineHeights = {
  beast: '88px',
  h1: '64px',
  h2: '44px',
  h3: '36px',
  h4: '30px',
  h5: '24px',
  bLarge: '22px',
  bMedium: '24px',
  bSmall: '20px',
  bExtraSmall: '150%',
  micro: '14px',
};

const letterSpacings = {
  beast: '-4.8px',
  h1: '-2.4px',
  h2: '-2px',
  h3: '-1.2px',
  h4: '-0.96px',
  h5: '-0.96px',
  bLarge: '-0.4px',
  bMedium: '0.2px',
  bSmall: '0.2px',
  bExtraSmall: '0.2px',
  micro: '0.2px',
};

export const getFontSize = (type, fz) => fontSizes[type] || fz || '14px';

const TextStyled = styled.p`
  font-size: 1.8rem;
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  font-size: ${({ type, fz }) => getFontSize(type, fz)};
  line-height: ${({ type, lh }) => lh || lineHeights[type]};
  letter-spacing: ${({ type, ls }) => ls || letterSpacings[type] || 'inherit'};
  font-weight: ${({ fw }) =>
    fw === 'regular' ? 400 : fw === 'medium' ? 500 : fw === 'bold' ? 700 : fw};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
  word-break: ${({ wordBreak }) => wordBreak};
  cursor: ${({ pointer, cursor }) => (pointer ? 'pointer' : cursor)};
  width: ${({ w }) => w};
  white-space: ${({ whiteSpace }) => whiteSpace};
  font-family: ${({ fontFamily }) => fontFamily && theme.fontFamilies.title};
  margin: 0;
  @media ${devices.desktop} {
    font-size: ${({ type, typeD, fz }) => getFontSize(typeD || type, fz)};
    line-height: ${({ type, typeD, lh }) => lineHeights[typeD || type] || lh};
  }
  @media ${devices.laptop} {
    font-size: ${({ type, typeL, typeD, fz }) =>
      getFontSize(typeL || typeD || type, fz)};
    line-height: ${({ type, typeL, typeD, lh }) =>
      lineHeights[typeL || typeD || type] || lh};
  }
  @media ${devices.miniLaptop} {
    font-size: ${({ type, typeML, typeL, typeD, fz }) =>
      getFontSize(typeML || typeL || typeD || type, fz)};
    line-height: ${({ type, typeML, typeL, typeD, lh }) =>
      lineHeights[typeML || typeL || typeD || type] || lh};
  }
  @media ${devices.tablet} {
    font-size: ${({ type, typeT, typeML, typeL, typeD, fz }) =>
      getFontSize(typeT || typeML || typeL || typeD || type, fz)};
    line-height: ${({ type, typeT, typeML, typeL, typeD, lh }) =>
      lineHeights[typeT || typeML || typeL || typeD || type] || lh};
  }
  @media ${devices.mobile} {
    font-size: ${({ type, typeM, typeT, typeML, typeL, typeD, fz }) =>
      getFontSize(typeM || typeT || typeML || typeL || typeD || type, fz)};
    line-height: ${({ type, typeM, typeT, typeML, typeL, typeD, lh }) =>
      lineHeights[typeM || typeT || typeML || typeL || typeD || type] || lh};
  }
`;

TextStyled.defaultProps = {
  type: '',
  color: theme.colors.white,
  textTransform: 'inherit',
  align: 'inherit',
};

export default TextStyled;
