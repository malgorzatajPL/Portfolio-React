import styled, { css } from 'styled-components';
import { theme } from '../styles/theme';

export const Base = css`
  width: 200px;
  color: ${theme.palette.common.white};
  font-family: ${theme.fontFamily.main};
  border-radius: 10px;
  background-color: ${theme.palette.common.black};
  border: 2px solid ${theme.palette.common.pink};
  padding: 20px;
  transition: 0.4s;
  :focus {
    transition: outline 0.3s easy;
    outline: 3px solid ${theme.palette.common.pink};
  }
`;

export const FormStyle = styled.div`
  height: 600px;
  display: flex;
  padding: 30px;
`;

export const FormBox = styled.div`
  display: flex;
  position: relative;
  padding: 20px 0;
`;
export const FormBoxButton = styled(FormBox)`
  justify-content: center;
`;

export const FormLabel = styled.label`
  color: ${theme.palette.common.white};
  font-family: ${theme.fontFamily.main};
  background-color: ${theme.palette.common.black};
  padding: 0 10px;
  position: absolute;
  top: 12px;
  left: 18px;
`;
export const FormInput = styled.input`
  ${Base}
`;

export const FormTextarea = styled.textarea`
  height: 250px;
  ${Base}
`;
