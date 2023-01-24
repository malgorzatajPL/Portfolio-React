import React from 'react';
import {
  AboutHeader,
  AboutStyle,
  ContentAbout,
  TitleAbout,
} from './About.style';

function About() {
  return (
    <AboutStyle>
      <AboutHeader>
        <TitleAbout>HI!</TitleAbout>
        <ContentAbout>
          My name is Malgorzata. I've been in England since 2015 and I'm glad I
          found my home. I have been interested in programming for 3 years, I am
          still learning and perfecting my skills. I love Frontend but would
          like to become a Full Stack Developer.
        </ContentAbout>
      </AboutHeader>
    </AboutStyle>
  );
}

export default About;