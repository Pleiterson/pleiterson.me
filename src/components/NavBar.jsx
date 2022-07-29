import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import { navLinks } from '../constants/modules';
import mixin from '../helpers/styles';
import cv from '../_assets/Curriculo-BR.pdf';

const Navbar = styled.nav`
  ${mixin.flexBetween};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  height: 4em;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 3em;
  backdrop-filter: blur(.6em);
  transition: var(--transition);

  .logo {
    background: transparent;
    color: var(--color-txt-three);
    text-decoration: none;
    margin-left: 1.3em;
    font-size: 1.1em;
    font-weight: bolder;
    font-style: italic;
    cursor: pointer;

    span {
      background: transparent;
      color: var(--color-txt-six);
      font-family: var(--font-code);
    }
  }

  .nav-links {
    ${mixin.flexBetween};
    list-style: none;
    counter-reset: item 0;
    z-index: 12;

    li {
      margin: 0 .3em;
      position: relative;
      counter-increment: item 1;
    }

    .items {
      color: var(--color-txt-two);
      padding: .6em;
      font-family: var(--font-details);
      font-size: .9em;
      text-decoration: none;

      &::before {
        content: '0' counter(item) '.';
        margin-right: .3em;
        color: var(--color-txt-six);
        text-align: right;
      }

      &:hover {
        color: var(--color-txt-six);
      }
    }
  }

  .resume {
    ${mixin.button};
    margin-left: .9em;
    margin-top: 0;
    align-items: center;
    text-align: center;
  }

  .hamburguer {
    display: none;
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {}

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {
    .logo {
      margin-left: 0;
    }

    .nav-links {
      display: none;
    }

    .nav-links-mobile {
      ${mixin.flexCenter};
      position: absolute;
      display: block;
      list-style: none;
      left: 0;
      width: 100%;
      top: 4em;
      z-index: 11;
      background: var(--color-bg-one);
      transition: var(--transition);
      counter-reset: item 0;

      li {
        padding: .6em;
        text-align: center;
        counter-increment: item 1;
      }

      .items {
        color: var(--color-txt-two);
        font-family: var(--font-details);
        font-size: .8em;
        text-align: center;
        text-decoration: none;
        width: 100%;
        transition: var(--transition);

        &::before {
          content: '0' counter(item) '.';
          margin-right: .3em;
          color: var(--color-txt-six);
          text-align: right;
        }
      }
    }
    
    .hamburguer {
      display: block;
      position: absolute;
      font-size: 2em;
      color: var(--color-ln-three);
      background-color: transparent;
      border: none;
      outline: none;
      top: .5em;
      right: 1em;
    }
  }
  
  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {
    .logo {
      margin-left: 0;
      font-size: .9em;
    }
    
    .nav-links {
      li {
        margin: 0;
      }

      .items {
        padding: .3em;
        font-size: .8em;
      }
    }

    .resume {
      display: none;
    }
  }

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <Navbar>
        <Link to="/" className="logo">&lt;<span>Pleiterson </span>/&gt;</Link>

        <ul
          className={ isMobile ? "nav-links-mobile" : "nav-links" }
          onClick={ () => setIsMobile(false) }
        >
          { navLinks && navLinks.map(({ name, url }, i) => (
            <li key={ i }>
              <Link to={ url } className="items">{ name }</Link>
            </li>
          )) }

          <a
            href={ cv }
            className="resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsDownload size={15} />
            &nbsp;Download CV
          </a>
        </ul>

        <button
          className="hamburguer"
          onClick={ () => setIsMobile(!isMobile) }
        >
          { isMobile ? <FaTimes /> : <FaBars /> }
        </button>
      </Navbar>
    </>
  );
}

export default NavBar;
