import React from 'react';
import styled from 'styled-components';

import { SiWhatsapp } from 'react-icons/si';

export const Whatsapp = styled.a`
  transition: 300ms all;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25d366;
  line-height: 59px;
  text-align: center;
  margin: 20px;
  padding: 10px;
  position: fixed;
  top: 88%;
  right: 1%;
  z-index: 9999;
  cursor: pointer;
  animation: pulse 3s linear infinite;
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(52, 175, 35, 0.25);
    }
    50% {
      box-shadow: 0 0 0 50px rgba(55, 209, 201, 0), 0 0 0 20px rgba(55, 209, 201, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(55, 209, 201, 0), 0 0 0 20px rgba(55, 209, 201, 0);
    }
  }

  @media screen and (max-width: 375px) {
    top: 82%;
    width: 50px;
    height: 50px;
    line-height: 48px;

    svg {
      width: 20px;
    }
  }
`;

const WhatsApp = () => {
  return (
    <Whatsapp target="_blank"  rel="noopener noreferrer" href="https://api.whatsapp.com/send?1=pt_BR&phone=5531988789772&text=Olá! Vi seu Portfólio Pessoal. Podemos conversar?">
      <SiWhatsapp size={26} title="WhatsApp" color="#ffffff" />
    </Whatsapp>
  );
};

export default WhatsApp;
