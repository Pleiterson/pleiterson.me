import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mixin from '../helpers/styles';

const Container = styled.div`
  ${mixin.pageCenter};
  padding: 0 9.3em;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  p {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-family: var(--font-details);
  font-size: 20em;
  line-height: 1;
  margin: 0 .6em;

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    font-size: 10em;
  }
`;

const Subtitle = styled.h2`
  font-size: 3em;
  font-weight: 400;
  margin: 0 0 .6em;

    /* Versão para Mobile */
    @media only screen and (max-width: 600px) {
      font-size: 2em;
    }
`;

const Button = styled(Link)`
  ${mixin.button};
`;

const PageNotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <p>Desculpe!<br/>Ainda em desenvolvimento</p>
      <Button to="/">Go Home</Button>
    </Container>
  );
}

export default PageNotFound;
