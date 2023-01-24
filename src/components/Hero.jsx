import React from 'react'
import { Header, HeroStyle, ImageHero, SubTitle, Title } from './Hero.style'

const Hero = () => {
  return (
    <HeroStyle> 
         <ImageHero alt='background hero' src='/backgroundHero.png'/>
    <Header>
         <Title>frontend developer</Title>
    </Header>
    <Header>
    <Title>Malgorzata Jaskiewicz </Title> 
         <SubTitle>portfolio</SubTitle>
    </Header>
    </HeroStyle>

  )
}

export default Hero