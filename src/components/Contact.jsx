import React from 'react';
import { Email } from './Email';
import SocialMedia from './SocialMedia';
import styled from 'styled-components';
import { device } from '../shared/MediaQuery';

const ContactStyle = styled.div`
  display: flex;
  align-items: baseline;

  @media ${device.mobileS} {
    justify-content: center;
    padding: 0 6%;
  }
  @media ${device.laptop} {
    padding: 0 12%;
    justify-content: space-between;
  }
`;

const Contact = () => {
  return (
    <ContactStyle>
      <Email /> <SocialMedia />
    </ContactStyle>
  );
};

export default Contact;
