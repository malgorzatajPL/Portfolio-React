import styled from 'styled-components';
import { fontSize, theme } from '../styles/theme';
import { SecondTitle } from './Hero.style';
import { device } from '../shared/MediaQuery';

export const MyExperienceStyle = styled.section`
  position: relative;
  min-height: 500px;
  padding: 100px 40px;
  margin-top: 100px;
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
  color: ${theme.palette.common.white};
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      rgba(114, 28, 90),
      rgba(255, 0, 0, 0)
    );
  }
`;

export const TitleMyExperience = styled(SecondTitle)`
  @media ${device.mobileS} {
    font-size: ${fontSize(26)};
    padding: 70px 0;
  }
  @media ${device.mobileXL} {
    font-size: ${fontSize(30)};
  }
  @media ${device.tablet} {
    font-size: ${fontSize(36)};
  }
  @media ${device.laptop} {
    padding-bottom: 0;
    width: 50%;
  }
  :before {
    @media ${device.mobileS} {
      top: 95px;
      width: 200px;
    }
    @media ${device.mobileXL} {
      top: 99px;
      width: 227px;
    }
    @media ${device.tablet} {
      top: 105px;
      width: 277px;
    }
  }
`;
export const ContainerMyExperience = styled.div`
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 50%;
    padding: 0 20px;
  }
`;
export const TitleContainer = styled.h3`
  font-size: ${fontSize(30)};
  font-family: ${theme.fontFamily.main};
  line-height: 1.9;
  @media ${device.mobileS} {
    font-size: ${fontSize(26)};
  }
  @media ${device.mobileXL} {
    font-size: ${fontSize(30)};
  }
  @media ${device.tablet} {
    font-size: ${fontSize(36)};
  }
  @media ${device.laptop} {
    padding-bottom: 0;
    width: 50%;
  }
`;
export const ContentContainer = styled.div``;
export const Data = styled.div`
  font-family: ${theme.fontFamily.main};
  line-height: 2.3;
  @media ${device.mobileS} {
    font-size: ${fontSize(18)};
  }

  @media ${device.laptop} {
    font-size: ${fontSize(18)};
  }
`;
export const List = styled.ul`
  list-style-type: disc;
`;
export const Listli = styled.li`
  font-family: ${theme.fontFamily.main};
  line-height: 1.7;
  padding: 10px 0;
  @media ${device.mobileS} {
    font-size: ${fontSize(16)};
  }
  @media ${device.laptop} {
    font-size: ${fontSize(20)};
  }
`;
