import React from 'react';
import styled from 'styled-components';
import { sideMedia } from '../constants/modules';
import { Icon } from '../_assets/js/';

const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 3em;
  padding: 0 1.3em;
  list-style: none;
  max-width: 3em;
  position: fixed;
  bottom: 0;
  z-index: 10;

  &:after {
    content: '';
    display: block;
    width: .06em;
    height: 6em;
    margin: 0 auto;
    background-color: var(--color-ln-two);
  }

  li {
    margin-bottom: 1.3em;
    
    a {
      color: var(--color-txt-two);
      text-decoration: none;
      padding: .6em;
      transition: var(--transition);

      &:hover {
        transform: translateY(-.5em);
        color: var(--color-txt-six);
      }
    }

    svg {
      max-width: 1.3em;
      height: 1.3em;
    }
  }
  
  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {}
  
  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 0 .9em .6em .9em;
    max-width: 100%;
    position: static;
    flex-direction: row;
  
    &:after {
      display: none;
    }
  
    li a {
      padding: 0 .6em;
    }
  }

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {
    margin: 0 1.5em;
    padding: 0;
  }
`;

const Social = () => {
  return (
    <>
      <SocialList>
        {sideMedia && sideMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} title={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </SocialList>
    </>
  );
};

export default Social;
