import { devices } from 'style/constants';
import styled from 'styled-components';

const BoxStyled = styled.div`
  display: ${({ display, $span, hidden }) =>
    hidden ? 'none' : display ? display : $span && 'inline-block'};
  background-color: ${({ bgc }) => bgc};
  background-size: ${({ bgs }) => bgs};
  background-image: ${({ bgi }) => bgi};
  background-position: ${({ bgp }) => bgp};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: ${({ pointer, cursor }) => (pointer ? 'pointer' : cursor)};
  border: ${({ b }) => b};
  border-bottom: ${({ bb }) => bb};
  border-top: ${({ bt }) => bt};
  border-right: ${({ br }) => br};
  border-left: ${({ bl }) => bl};
  height: ${({ h }) => h};
  max-width: ${({ maxW }) => maxW};
  max-height: ${({ maxH }) => maxH};
  min-width: ${({ minW }) => minW};
  min-height: ${({ minH }) => minH};
  zoom: ${({ zoom }) => zoom};
  flex: ${({ flex }) => flex};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  text-align: ${({ textAlign }) => textAlign};
  visibility: ${({ visibility }) => visibility};
  transition: ${({ transition }) => transition};
  transform: ${({ transform }) => transform};
  transform-origin: ${({ transformOrigin }) => transformOrigin};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  opacity: ${({ opacity }) => opacity};
  clip-path: ${({ clipPath }) => clipPath};
  box-shadow: ${({ boxShadow }) => boxShadow};
  z-index: ${({ zIndex }) => zIndex};
  letter-spacing: ${({ ls }) => ls};
  user-select: ${({ noSelect }) => noSelect && 'none'};

  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  column-gap: ${({ columnGap }) => columnGap};
  grid-row-gap: ${({ rowGap }) => rowGap};

  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-grow: ${({ flexGrow }) => flexGrow};

  @media ${devices.desktop} {
    width: ${({ w, wd }) => wd || w};
    height: ${({ h, hd }) => hd || h};
    margin: ${({ m, md }) => md || m};
    padding: ${({ p, pd }) => pd || p};
    flex-direction: ${({ flexDirectionD, flexDirection }) =>
      flexDirectionD || flexDirection};
    justify-content: ${({ justifyContentD, justifyContent }) =>
      justifyContentD || justifyContent};
    align-items: ${({ alignItemsD, alignItems }) => alignItemsD || alignItems};
  }
  @media ${devices.laptop} {
    width: ${({ w, wl, wd }) => wl || wd || w};
    height: ${({ h, hl, hd }) => hl || hd || h};
    margin: ${({ m, ml, md }) => ml || md || m};
    padding: ${({ p, pl, pd }) => pl || pd || p};
    flex-direction: ${({ flexDirectionD, flexDirectionL, flexDirection }) =>
      flexDirectionL || flexDirectionD || flexDirection};
    justify-content: ${({ justifyContentD, justifyContentL, justifyContent }) =>
      justifyContentL || justifyContentD || justifyContent};
    align-items: ${({ alignItemsD, alignItemsL, alignItems }) =>
      alignItemsL || alignItemsD || alignItems};
  }
  @media ${devices.miniLaptop} {
    width: ${({ w, wml, wl, wd }) => wml || wl || wd || w};
    height: ${({ h, hml, hl, hd }) => hml || hl || hd || h};
    margin: ${({ m, mml, ml, md }) => mml || ml || md || m};
    padding: ${({ p, pml, pl, pd }) => pml || pl || pd || p};
    flex-direction: ${({
      flexDirectionD,
      flexDirectionL,
      flexDirectionML,
      flexDirection,
    }) => flexDirectionML || flexDirectionL || flexDirectionD || flexDirection};
    justify-content: ${({
      justifyContentD,
      justifyContentL,
      justifyContentML,
      justifyContent,
    }) =>
      justifyContentML || justifyContentL || justifyContentD || justifyContent};
    align-items: ${({ alignItemsD, alignItemsL, alignItemsML, alignItems }) =>
      alignItemsML || alignItemsL || alignItemsD || alignItems};
  }
  @media ${devices.tablet} {
    width: ${({ w, wt, wml, wl, wd }) => wt || wml || wl || wd || w};
    height: ${({ h, ht, hml, hl, hd }) => ht || hml || hl || hd || h};
    margin: ${({ m, mt, mml, ml, md }) => mt || mml || ml || md || m};
    padding: ${({ p, pt, pml, pl, pd }) => pt || pml || pl || pd || p};
    flex-direction: ${({
      flexDirectionD,
      flexDirectionL,
      flexDirectionML,
      flexDirectionT,
      flexDirection,
    }) =>
      flexDirectionT ||
      flexDirectionML ||
      flexDirectionL ||
      flexDirectionD ||
      flexDirection};
    justify-content: ${({
      justifyContentD,
      justifyContentL,
      justifyContentML,
      justifyContentT,
      justifyContent,
    }) =>
      justifyContentT ||
      justifyContentML ||
      justifyContentL ||
      justifyContentD ||
      justifyContent};
    align-items: ${({
      alignItemsD,
      alignItemsL,
      alignItemsML,
      alignItemsT,
      alignItems,
    }) =>
      alignItemsT || alignItemsML || alignItemsL || alignItemsD || alignItems};
  }
  @media ${devices.mobile} {
    width: ${({ w, wm, wml, wt, wl, wd }) => wm || wt || wml || wl || wd || w};
    height: ${({ h, hm, hml, ht, hl, hd }) => hm || ht || hml || hl || hd || h};
    margin: ${({ m, mm, mt, mml, ml, md }) => mm || mt || mml || ml || md || m};
    padding: ${({ p, pm, pt, pml, pl, pd }) =>
      pm || pt || pml || pl || pd || p};
    flex-direction: ${({
      flexDirectionD,
      flexDirectionL,
      flexDirectionML,
      flexDirectionT,
      flexDirectionM,
      flexDirection,
    }) =>
      flexDirectionM ||
      flexDirectionT ||
      flexDirectionML ||
      flexDirectionL ||
      flexDirectionD ||
      flexDirection};
    justify-content: ${({
      justifyContentD,
      justifyContentL,
      justifyContentML,
      justifyContentT,
      justifyContentM,
      justifyContent,
    }) =>
      justifyContentM ||
      justifyContentT ||
      justifyContentML ||
      justifyContentL ||
      justifyContentD ||
      justifyContent};
    align-items: ${({
      alignItemsD,
      alignItemsL,
      alignItemsML,
      alignItemsT,
      alignItemsM,
      alignItems,
    }) =>
      alignItemsM ||
      alignItemsT ||
      alignItemsML ||
      alignItemsL ||
      alignItemsD ||
      alignItems};
  }
`;

BoxStyled.defaultProps = {
  m: 0,
  md: null,
  ml: null,
  mt: null,
  mm: null,
  p: null,
  pd: null,
  pl: null,
  pt: null,
  pm: null,
  display: 'block',
  hidden: false,
};

export default BoxStyled;
