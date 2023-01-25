import styled from 'styled-components';
import { fontSize, theme } from '../styles/theme';
import { device } from '../shared/MediaQuery';

export const AboutStyle = styled.section`
  width: 100%;
  background: ${theme.palette.common.black};
  color: ${theme.palette.common.white};
`;
export const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media ${device.mobileS} {
    padding: 0 10px 40px 10px;
    width: 80%;
  }
  @media ${device.tablet} {
    padding: 0 20px 40px 20px;
    width: 65%;
  }
`;

export const TitleAbout = styled.h3`
  font-size: ${fontSize(40)};
  font-family: ${theme.fontFamily.main};
  line-height: 1.9;
`;
export const ContentAbout = styled.p`
  font-size: ${fontSize(30)};
  line-height: 1.4;
  font-family: ${theme.fontFamily.main};
`;
