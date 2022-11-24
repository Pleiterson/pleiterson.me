import React from 'react';
import styled from 'styled-components';
import { projects } from '../../../constants/modules';
import mixin from '../../../helpers/styles';
import { SubTitle, Title } from '../../../utils';
import { Icon } from '../../../_assets/js';

const ContainerTitle = styled.article`
  ${mixin.flexCenter};

  a {
    text-decoration: none;
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    padding: 0;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Wrapper = styled.article`
  ${mixin.flexWrapFlow};
  padding: 0 6em 6em;
  margin: 0 auto;
  width: 100%;
  
  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    padding: .5em;
    width: 99%;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {
    padding: 0 2.5em 2.5em;
    margin: 0 auto;
  }
`;

const Container = styled.section`
  ${mixin.flexWrapFlow};
  margin: .6em;
  padding: .6em;
  width: 30%;
  height: 21em;
  box-shadow: .13em .13em .13em .13em rgba(2, 2, 2, 0.25);
  /* border: .06em solid var(--color-ln-two); */
  border-radius: .3em;
  transition: var(--transition);
  background-color: var(--color-bg-seven);
  
  .header {
    ${mixin.flexBetween};
    width: 100%;
    margin: 0 .6em;
    padding: 0 .6em;
    
    svg {
      width: 3em;
      height: 3em;
      color: var(--color-txt-six);
    }
    
    .link {
      padding: 0 .4em;

      svg {
        width: 1.3em;
        height: 1.3em;
        color: var(--color-txt-two);
        transition: var(--transition);

        &:hover {
          color: var(--color-txt-six);
        }
      }
    } 
  }

  .item {
    h3 {
      text-align: center;
      margin-bottom: .9em;
      color: var(--color-txt-six);
    }

    p {
      font-size: .9em;
      text-align: justify;
    }

    .languages {
      margin: .9em 0;
      color: var(--color-txt-three);
      font-family: var(--font-code);
      font-size: .7em;
    }
    
    span {
      font-size: .7em;
      font-family: var(--font-code);
      color: var(--color-txt-six);
      margin: .9em 0;
    }
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    .pack {
      width: 100%;
      height: 16em;
      margin: .6em 0;
      padding: .6em;
    }

    .header {
      margin: 0 0 .6em;

      .link svg {
        margin-right: 1em;
      }
    }

    .item {
      p {
        font-size: .8em;
      }

      .languages {
        font-size: .6em;
      }
    }
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {
    margin: .6em;
    width: 100%;
  }

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {
    /* height: 21em; */
  }
`;

const Projects = () => {
  return (
    <>
      <Title>Projetos e Trabalhos</Title>
      
      <ContainerTitle>
        <a href="/project"><SubTitle>Mais projetos</SubTitle></a>
        <SubTitle>&nbsp;·&nbsp;</SubTitle>
        <a href="/works"><SubTitle>Mais trabalhos</SubTitle></a>
      </ContainerTitle>

      <Wrapper>
        { projects && projects.map(({ icon, iconRepo, linkRepo, iconProject, linkProject, title, description, language, category }, i) => (
          <Container key={ i } className="pack">
            <div className="header">
              <div>
                <Icon name={ icon } />
              </div>
              <div className="links">
                <a className="link" href={ linkRepo } target="_blank" rel="noreferrer"><Icon name={ iconRepo }/></a>
                <a className="link" href={ linkProject } target="_blank" rel="noreferrer"><Icon name={ iconProject }/></a>
              </div>
            </div>
            <div className="item">
              <h3>{ title }</h3>
              <p>{ description }</p>
              <p className="languages">{ language }</p>
              <span>{ category }</span>
            </div>
          </Container>
        )) }
      </Wrapper>
    </>
  );
}

export default Projects;
