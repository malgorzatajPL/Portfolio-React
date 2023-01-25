import styled from 'styled-components';
import { fontSize, theme } from '../styles/theme';
import { AboutHeader } from './About.style';
import { device } from '../shared/MediaQuery';

export const MyExperienceStyle = styled.section`
  position: relative;
  padding: 500px 0;
  margin-top: 100px;
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

export const TitleMyExperience = styled.section``;
export const TitleContainer = styled.h3``;
export const ContainerMyExperience = styled.div``;
export const ContentContainer = styled.div``;
export const Data = styled.div``;
export const List = styled.ul``;
export const Listli = styled.li``;
