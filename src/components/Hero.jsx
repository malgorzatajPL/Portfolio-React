import React from 'react';
import {
  Header,
  HeroStyle,
  ImageHero,
  SecondTitle,
  SubTitle,
  Title,
} from './Hero.style';

const Hero = () => {
  return (
    <HeroStyle>
      <ImageHero alt='background hero' src='/backgroundHero.png' />
      <Header>
        <SecondTitle>frontend</SecondTitle> <SecondTitle>developer</SecondTitle>
      </Header>
      <Header>
        <Title>Malgorzata</Title> <Title>Jaskiewicz </Title>
        <SubTitle>portfolio</SubTitle>
      </Header>
    </HeroStyle>
  );
};

export default Hero;
