import React from 'react';
import styled from 'styled-components';
import mixin from '../helpers/styles';

const SubTitlePage = styled.h2`
  ${mixin.titleDetails};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .6em 0 1.3em;

  /* @media screen and (max-width: 375px) {
  } */
  
  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    margin: 0 0 .6em;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const SubTitle = (props) => {
  return (
    <SubTitlePage>{ props.children }</SubTitlePage>
  );
}

export default SubTitle;
