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
`;
export const Title = styled.h1`
  font-family: ${theme.fontFamily.main};
  text-transform: uppercase;
  font-size: ${fontSize(60)};
  max-width: 300px;
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
  width: 50%;
`;
