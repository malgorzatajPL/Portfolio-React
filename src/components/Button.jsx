import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../styles/theme';
import { Base } from './Email.style';

export const ButtonStyle = styled.input`
  ${Base}
  width:40%;
  text-align: center;
  font-size: ${fontSize(18)};
`;
const Button = ({ text_button }) => {
  return <ButtonStyle value={text_button} />;
};

export default Button;
