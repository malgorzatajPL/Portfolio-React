import styled from 'styled-components';
import { fontSize, theme } from '../styles/theme';
export const SocialMediaStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;
export const Link = styled.a`
  color: ${theme.palette.common.white};
  padding: 30px;
`;

export const SocialTitle = styled.span`
  color: ${theme.palette.common.white};
  text-align: center;
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(22)};
`;
