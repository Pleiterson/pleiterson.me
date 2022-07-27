import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixin from '../helpers/styles';

const Main = styled.main`
  ${mixin.pageCenter};
  padding: 0 9.3em;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    color: var(--color-txt-six);
  }

  p {
    padding: 1em 0 0;
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    padding: 0 1em;
  }
`;

const Button = styled(Link)`
  ${mixin.button};
`;

const Thanks = () => {
  return (
    <>
      <Main>
        <h1>Obrigado por entrar em contato!</h1>
        <p>Em breve vou ver sua mensagem e respondê-la o mais rápido possível.</p>
        <Button rel="noopener noreferrer" to="/">Go Home</Button>
      </Main>
    </>
  );
}

export default Thanks;
