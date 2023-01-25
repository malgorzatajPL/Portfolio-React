import React from 'react';
import { Css3, ReactLogo, Typescript } from 'styled-icons/boxicons-logos';
import { Figma } from 'styled-icons/fa-brands';
import {
  Adobephotoshop,
  Nextdotjs,
  Styledcomponents,
} from 'styled-icons/simple-icons';
import {
  BoxSkills,
  ContentSkills,
  HeaderMySkills,
  ImageSkills,
  MySkillsStyle,
  TitleHeaderSkills,
  TitleSkills,
} from './MySkills.style';

function MySkills() {
  return (
    <MySkillsStyle>
      <ImageSkills alt='background skills' src='/background.png' />
      <HeaderMySkills>
        <TitleHeaderSkills> My skills</TitleHeaderSkills>
        <ContentSkills>
          <BoxSkills>
            <ReactLogo size={68}></ReactLogo>
            <TitleSkills>React</TitleSkills>
          </BoxSkills>
          <BoxSkills>
            <Typescript size={68}></Typescript>
            <TitleSkills>Typescript</TitleSkills>
          </BoxSkills>
          <BoxSkills>
            <Adobephotoshop size={60}></Adobephotoshop>
            <TitleSkills>Photoshop</TitleSkills>
          </BoxSkills>
          <BoxSkills>
            <Figma size={60}></Figma>
            <TitleSkills>Figma</TitleSkills>
          </BoxSkills>
          <BoxSkills>
            <Css3 size={68}></Css3>
            <TitleSkills>Css</TitleSkills>
          </BoxSkills>
          <BoxSkills>
            <Styledcomponents size={68}></Styledcomponents>
            <TitleSkills>Styled components</TitleSkills>
          </BoxSkills>
          <BoxSkills>
            <Nextdotjs size={60}></Nextdotjs>
            <TitleSkills>Next.js</TitleSkills>
          </BoxSkills>
        </ContentSkills>
      </HeaderMySkills>
    </MySkillsStyle>
  );
}

export default MySkills;
