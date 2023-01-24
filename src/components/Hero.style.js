import styled from 'styled-components';
import { fontSize, theme } from '../styles/theme';

export const HeroStyle = styled.section`
  width: 100%;
  height: 100vh;
  background: ${theme.palette.common.black};
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
  font-family: ${theme.fontFamily.main};
  text-transform: uppercase;
  font-size: ${fontSize(60)};
  text-shadow: 2px 1px 2px ${theme.palette.common.grey};
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
  :before {
    content: '';
    position: absolute;
    width: 50%;
    height: 10px;
    z-index: -1;
    background-color: ${theme.palette.common.pink};
    bottom: 12px;
    left: 27px;
    opacity: 0.8;
  }
`;
