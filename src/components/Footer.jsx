import React from 'react';
import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';

import mixins from '../helpers/styles';
import { Social } from './index.jsx';

const Copyright = styled.div`
  ${mixins.flexCenter};
  justify-content: space-around;
  text-align: center;
  font-size: .8em;
  height: 3em;

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 0 .6em;
    height: 8em;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Developer = styled.div`
  text-align: center;

  a {
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <>
      <Social />

      <Copyright>
        <div>
          <p>© 2020-2022.<br/>Todos os direitos reservados.</p>
        </div>
        <Developer>
          <p>Desenvolvido por:</p>
          <p><FaCode />&nbsp;&nbsp;<em>Pleiterson Amorim</em></p>
        </Developer>
      </Copyright>
    </>
  );
};

export default Footer;
