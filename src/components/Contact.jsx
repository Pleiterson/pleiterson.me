import React from 'react';
import styled from 'styled-components';
import { GrSend } from 'react-icons/gr';
import mixin from '../helpers/styles';
import { Title, SubTitle } from '../utils';

const Container = styled.article`
  ${mixin.pageCenter};
  width: 100%;
  margin: 0 auto 6em;
  padding: 1em 0 6em 0;
  text-align: center;

  p {
    width: 32%;
    padding: 0 0 3em;

    span {
      color: var(--color-txt-six);
    }
  }


  form {
    ${mixin.flexCenter};
    flex-direction: column;
    padding: 0;

    input, textarea {
      margin: 1.2em;
      padding: .6em;
      border: .1em solid var(--color-ln-six);
      border-radius: .5em;
      background-color: transparent;
      color: var(--color-txt-six);
      width: 30em;
    }

    input {
      height: 2.5em;
    }

    textarea {
      height: 6em;
    }

    button {
      ${mixin.button};
      margin: 1.2em;
    }
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
    padding: 0 .6em 3em;
    width: 100%;

    form {
      input, textarea {
        width: 100%;
      }
    }
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {
    p {
      width: 50%;
    }
  }

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Contact = () => {
  return (
    <>
      <SubTitle>Qual o próximo passo?</SubTitle>
      <Title>Entre em contato</Title>
      
      <Container>
        <p>Minha caixa de entrada está sempre aberta. Tem alguma pergunta ou apenas queira dizer oi, será um prazer conversar com você!<br/>
          <span>Bora conversar?</span>
        </p>

        <form action="https://formsubmit.co/pleiterson@gmail.com" method="POST" id="contact-form">
          <input type="text" name="Nome" placeholder="Digite seu nome" required />
          <input type="email" name="E-mail" placeholder="Digite seu e-mail" required />
          <textarea name="Messagem" placeholder="Digite sua mensagem..." required />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Contato via Portfólio" /> {/* mostra o assunto do e-mail no e-mail recebido */}
          <input type="hidden" name="_template" value="table" /> {/* mostra os dados no e-mail recebido em formato de tabela */}
          {/*<input type="hidden" name="_cc" value="other@email.com" /> {/* envia o formulário com cópia para mais uma pessoa */}
          {/*<input type="hidden" name="_cc" value="other@email.com, yetanother@email.com" /> {/* envia o formulário com cópia para mais de uma pessoa */}
          <input type="hidden" name="_next" value="https://pleiterson.vercel.app/thanks" /> {/* mostra a tela de obrigado */}
          <button type="submit"><GrSend size={16} /> &nbsp;Enviar</button>
        </form>
      </Container>
    </>
  );
}

export default Contact;
