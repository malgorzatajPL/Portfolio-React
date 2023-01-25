import styled from 'styled-components';
import { fontSize, theme } from '../styles/theme';
import { AboutHeader } from './About.style';
import { device } from '../shared/MediaQuery';
import { SecondTitle } from './Hero.style';

export const MySkillsStyle = styled.section`
  background-color: ${theme.palette.common.black};
  color: ${theme.palette.common.white};
`;
export const HeaderMySkills = styled(AboutHeader)`
  padding: 50px 0;
`;
export const ContentSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    justify-content: center;
  }
`;
export const BoxSkills = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleSkills = styled.div`
  font-size: ${fontSize(28)};
  font-family: ${theme.fontFamily.main};
  line-height: 1;
  text-align: center;
  padding: 15px 0;
`;

export const ImageSkills = styled.img`
  width: 100vw;
`;
export const TitleHeaderSkills = styled(SecondTitle)`
  :before {
    width: 100%;
  }
`;
