import styled from 'styled-components';
import { fontSize, theme } from '../styles/theme';
import { device } from '../shared/MediaQuery';

export const HeroStyle = styled.section`
  width: 100%;
  height: 100vh;
  color: ${theme.palette.common.white};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const ImageHero = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
`;
export const Header = styled.div`
  display: flex;
  height: 23%;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  max-width: 400px;
`;
export const Title = styled.h1`
  text-transform: uppercase;
  text-shadow: 2px 1px 2px ${theme.palette.common.grey};
  font-family: ${theme.fontFamily.main};
  @media ${device.mobileS} {
    font-size: ${fontSize(30)};
  }
  @media ${device.mobileL} {
    font-size: ${fontSize(60)};
  }
`;

export const SubTitle = styled.span`
  font-size: ${fontSize(40)};
  font-family: ${theme.fontFamily.main};
  letter-spacing: 12.8px;
  line-height: 3;
  text-shadow: 3px 3px 4px ${theme.palette.common.black};
`;

export const SecondTitle = styled(Title)`
  position: relative;
  line-height: 1.6;
  font-size: ${fontSize(36)};
  z-index: 2;
  :before {
    content: '';
    position: absolute;
    width: 48%;
    height: 10px;
    z-index: -1;
    background-color: ${theme.palette.common.pink};
    bottom: 12px;
    left: 27px;
    opacity: 0.8;
    z-index: -1;
  }
`;
