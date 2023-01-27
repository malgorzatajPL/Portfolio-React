import React from 'react';
import { Link, SocialMediaStyle, SocialTitle } from './SocialMedia.style';

import { Github, Gmail, Linkedin } from 'styled-icons/boxicons-logos';
import { FormBox } from './Email.style';

const SocialMedia = () => {
  return (
    <SocialMediaStyle>
      <SocialTitle>My social</SocialTitle>
      <FormBox>
        <Link target='blank' href='mailto:malgorzatahannajaskiewicz@gmail.com'>
          <Gmail size={68} />
        </Link>
        <Link
          target='blank'
          href='https://www.linkedin.com/in/malgorzata-jaskiewicz-059978146/'
        >
          <Linkedin size={68} />
        </Link>
        <Link target='blank' href='https://github.com/malgorzatajPL'>
          <Github size={68} />
        </Link>
      </FormBox>
    </SocialMediaStyle>
  );
};

export default SocialMedia;
