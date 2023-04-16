import React from 'react';
import styled from 'styled-components';
import { BsDownload } from 'react-icons/bs';
import { Contact, Footer, NavBar } from '../../components';
import { certificates } from '../../constants/modules';
import { Projects, Scraps, Services } from './components';
import mixin from '../../helpers/styles';
import cv from '../../_assets/Curriculo-BR.pdf';

const Main = styled.main`
  ${mixin.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  margin: 0 12.5em;
  padding: 0 9.3em;

  h1 {
    margin: 0;
    font-size: clamp(3em, 8vw, 5em);
  }

  .title {
    ${mixin.titleDetails};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .6em 0 1.3em;
    padding-top: 5em;
  }

  h3 {
    ${mixin.title};
    margin-top: 0.6em;
    line-height: 0.9em;
  }

  p {
    margin: 1.3em 0 0;
    max-width: 33.75em;

    a {
      text-decoration: none;
      color: var(--color-txt-six);
      font-weight: bolder;
    }
  }

  article {
    padding: 1em 0;
    max-width: 20em;
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;
    overflow-x: auto;

    img {
      max-width: 4em;
      max-height: 4em;
    }
  }

  .buttons {
    margin-top: 1.3em;
    margin-bottom: 3em;

    a {
      margin: .6em;
    }
  }
  
  .contact, .resume {
    ${mixin.button};
    margin-top: 3em;
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: clamp(1em, 8vw, 3em);
    }

    h3 {
      font-size: 1em;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      margin-top: 0em;
    }
  }
  
  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {
    padding: 0;
  }

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {
    margin: 0 3em;
  }
`;

const Home = () => {
  return (
    <>
      <NavBar />

      <Main>
        <h2 className="title">Oi, meu nome é</h2>
        <h1>Pleiterson Amorim</h1>
        <h3>Eu construo coisas para web.</h3>

        <p>Sou
          {' '}
          <em>Desenvolvedor Full Stack Júnior</em> na
          {' '}
          <a href="https://fiskaldigital.com.br/" target="_blank" rel="noopener noreferrer">Fiskal Digital Services</a> e
          {' '}
          <em>Desenvolvedor Freelancer. </em>
          Atudo com JavaScript, React, Node.js, CSS, HTML, TypeScript. Gosto de aprender coisas novas e amo codar. Aprendendo mais sobre Java, Python, php, React Native, Flutter, .NET entre outras linguagens e frameworks. Também tenho conhecimento, acadêmico, em C++ e C#.
        </p>

        <article>
          { certificates && certificates.map(({ imageURL, url, name }, i) => (
            <a href={ url } key={ i } target="_blank" rel="noopener noreferrer">
              <img src={ imageURL } title={ name } alt={ name } loading="lazy" />
            </a>
          )) }
        </article>

        <div className="buttons">
          <a href="#contact-form" className="contact">Entre em contato</a>
          <a href={ cv } className="resume" target="_blank" rel="noopener noreferrer"><BsDownload size={15} /> &nbsp;Download CV</a>
        </div>
      </Main>

      <Projects />
      <Services />
      <Scraps />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
