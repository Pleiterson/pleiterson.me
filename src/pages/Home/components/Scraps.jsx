import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa'
import mixin from '../../../helpers/styles';
import { Title, SubTitle } from '../../../utils';
import { scraps } from '../../../constants/modules';

const Wrapper = styled.section`
  ${mixin.flexWrapFlow};
  padding: 0 0 6em 0;
  width: 100%;

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {}

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {
    ${mixin.flexCenter};
    flex-direction: column;
    margin: 0 auto;
    padding: 0 .9em 3em;
  }

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Container = styled.div`
  ${mixin.flexCenter};
  margin: 0 1.3em 1.3em;
  padding: 0 .6em .6em;
  width: 40%;

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {}

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin: 0;
    padding: .6em;
  }

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Data = styled.div`
  ${mixin.flexCenter};
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: .6em;
  width: 40%;

  img {
    max-width: 5em;
    height: 5em;
    border-radius: 50%;
    box-shadow: .13em .13em .13em .13em rgba(2, 2, 2, 0.25);
    margin: .6em;
  }

  p {
    font-size: .9em;
    color: var(--color-txt-six);
  }

  span {
    font-size: .8em;
  }

  a {
    text-decoration: none;
    color: var(--color-txt-two);
    margin: .3em;
    transition: var(--transition);

    &:hover {
      color: var(--color-txt-six);
    }
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    margin: 0 .6em;
    padding: 0;
    width: 30%;

    img {
      max-width: 4em;
      height: 4em;
      margin: .6em;
    }

    p {
      font-size: .8em;
    }

    span {
      font-size: .6em;
    }
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Description = styled.p`
  text-align: center;
  font-size: .9em;
  padding: .6em;
  width: 100%;

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    font-size: .8em;
    width: 90%;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Scraps = () => {
  return (
    <>
      <SubTitle>O que falam sobre mim!</SubTitle>
      <Title>Depoimentos</Title>

      <Wrapper>
        { scraps && scraps.map(({ imageURL, linkedin, name, office, description }, i) => (
          <Container key={ i }>
            <Data>
              <img src={ imageURL } alt={ name } loading="lazy" />
              <p><strong>{ name }</strong></p>
              <span>{ office }</span>
              <a href={ linkedin } title="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </Data>
            <Description><em>{ description }</em></Description>
          </Container>
        )) }
      </Wrapper>
    </>
  );
};

export default Scraps;
