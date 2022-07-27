import React from 'react';
import styled from 'styled-components';

const LineTitle = styled.h1`
  border-bottom: .06em solid var(--color-ln-two);
  margin: 0 9.3em;
  padding: 0 .6em;

  /* @media screen and (max-width: 375px) {
  } */
  
  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    margin: 0 15px;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Line = () => {
  return (
    <LineTitle></LineTitle>
  );
}

export default Line;
