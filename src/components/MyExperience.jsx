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
        <TitleContainer>Connexin, Junior Frontend developer</TitleContainer>
        <ContentContainer>
          <Data>11.2021 - current</Data>
          <List>
            <Listli>
              Creating reusable components such as buttons, glass cards,
              articles, menus, postcode checkers, offer components.
            </Listli>
            <Listli>
              Reviewing other PRs, testing their work to see if they produce
              errors.
            </Listli>
            <Listli>
              Refactoring code to be as readable, effective and best as
              possible.
            </Listli>
            <Listli>Frontend development for IOT projects</Listli>
            <Listli>
              Implementing the best techniques of React, Next.js, Typescript and
              styled components.
            </Listli>
            <Listli>Creating CMS, Sanity.</Listli>
            <Listli>
              Work with Jira, agile. Creating tickets, time estimation and
              maintaining order in ticket work processes. Suggest ideas that can
              be implemented to improve the project. Troubleshooting.
            </Listli>
          </List>
        </ContentContainer>
      </ContainerMyExperience>
      <ContainerMyExperience>
        <TitleContainer>Freelance, Frontend developer</TitleContainer>
        <ContentContainer>
          <Data>08.2020 - 11.2021</Data>
          <List>
            <Listli>Creating business cards based on PDF in html, css </Listli>
            <Listli>
              Reviewing other PRs, testing their work to see if they produce
              errors.
            </Listli>
            <Listli>Creating email disclaimers for various companies </Listli>
          </List>
        </ContentContainer>
      </ContainerMyExperience>
    </MyExperienceStyle>
  );
}
export default MyExperience;
