import styled from 'styled-components';
import { fontSize, theme } from '../styles/theme';
import { device } from '../shared/MediaQuery';

export const AboutStyle = styled.section`
  width: 100%;
  color: ${theme.palette.common.white};
  min-height: 55vh;
  z-index: 10;
  position: relative;
  background: ${theme.palette.common.black};
`;
export const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media ${device.mobileS} {
    padding: 30px 10px 40px 10px;
    width: 80%;
  }
  @media ${device.tablet} {
    padding: 38px 20px 40px 20px;
    width: 65%;
  }
`;

export const TitleAbout = styled.h3`
  font-family: ${theme.fontFamily.main};
  line-height: 1.9;
  @media ${device.mobileS} {
    font-size: ${fontSize(30)};
  }
  @media ${device.laptop} {
    font-size: ${fontSize(40)};
  }
`;
export const ContentAbout = styled.p`
  line-height: 1.4;
  font-family: ${theme.fontFamily.main};
  @media ${device.mobileS} {
    font-size: ${fontSize(20)};
  }
  @media ${device.laptop} {
    font-size: ${fontSize(30)};
  }
`;
