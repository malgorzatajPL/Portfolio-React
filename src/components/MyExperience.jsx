import React from 'react';
import {
  ContainerMyExperience,
  ContentContainer,
  Data,
  List,
  Listli,
  MyExperienceStyle,
  TitleContainer,
  TitleMyExperience,
} from './MyExperience.style';

function MyExperience() {
  return (
    <MyExperienceStyle>
      <TitleMyExperience>My experience</TitleMyExperience>
      <ContainerMyExperience>
        <TitleContainer>Connexin </TitleContainer>
        <ContentContainer>
          <Data>11.22 - current</Data>
          <List>
            <Listli></Listli>
          </List>
        </ContentContainer>
      </ContainerMyExperience>
    </MyExperienceStyle>
  );
}
export default MyExperience;
