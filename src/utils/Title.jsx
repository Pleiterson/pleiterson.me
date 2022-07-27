import React from 'react';
import styled from 'styled-components';
import mixin from '../helpers/styles';

const TitlePage = styled.h1`
  ${mixin.title};
  display: flex;
  align-items: center;
  justify-content: center;

  /* @media screen and (max-width: 375px) {
  } */
  
  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    margin: 0 0 .6em;
    padding: 0 .9em;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Title = (props) => {
  return (
    <TitlePage>{ props.children }</TitlePage>
  );
}

export default Title;
