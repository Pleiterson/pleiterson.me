import React from 'react';
import styled from 'styled-components';
import { services } from '../../../constants/modules';
import mixin from '../../../helpers/styles';
import { Title } from '../../../utils';
import { Icon } from '../../../_assets/js';

const Wrapper = styled.article`
  ${mixin.flexCenter};
  padding: 0 0 6em 0;
  width: 100%;

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 0 .9em 3em;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Container = styled.section`
  ${mixin.flexCenter};
  flex-direction: column;
  text-align: center;
  margin: 1.3em 1.3em;
  padding: .6em .6em;
  width: 19%;
  height: 15em;
  box-shadow: .13em .13em .13em .13em rgba(2, 2, 2, 0.25);
  border-radius: .3em;
  transition: var(--transition);
  background-color: var(--color-bg-seven);

  svg {
    width: 3em;
    height: 3em;
  }

  h4 {
    margin: 1.3em 0;
    color: var(--color-txt-six);
  }

  p {
    font-size: .9em;
  }

  &:hover {
    margin-top: .6em;
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 10em;
    margin: .6em 0;
    padding: .6em;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Services = () => {
  return (
    <>
      <Title>Serviços</Title>

      <Wrapper>
        { services && services.map(({ title, name, description }, i) => (
          <Container key={ i }>
            <Icon name={ name }/>
            <h4>{ title }</h4>
            <p>{ description }</p>
          </Container>
        )) }
      </Wrapper>
    </>
  );
}

export default Services;
