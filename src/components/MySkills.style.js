import styled from 'styled-components';
import { fontSize, theme } from '../styles/theme';
import { AboutHeader } from './About.style';
import { device } from '../shared/MediaQuery';

export const MySkillsStyle = styled.section`
  background-color: ${theme.palette.common.black};
  color: ${theme.palette.common.white};
`;
export const HeaderMySkills = styled(AboutHeader)`
  padding: 50px 0;
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
export const ContentSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    justify-content: center;
  }
  @media ${device.mobileL} {
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
