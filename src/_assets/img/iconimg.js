// import React from 'react';
import {
  bruxaHipsta,
  cloneHomeInsta,
  cloneTypeform,
  cloneVercel,
  defaultImage,
  gameDino,
  gameGenius,
  gameMemoria,
  gameRescue,
  gameSnake, 
  gameSpace,
  gameVelha,
  landingPageEcommerce,
  pleiflix,
  pleiGames,
  pleiWeather,
  portfolioOne,
} from '../img';

const Iconimg = ({ name }) => {
  switch (name) {
    case 'bruxaHipsta':
      return bruxaHipsta;
    case 'cloneHomeInsta':
      return cloneHomeInsta;
    case 'cloneTypeform':
      return cloneTypeform;
    case 'cloneVercel':
      return cloneVercel;
    case 'gameDino':
      return gameDino;
    case 'gameGenius':
      return gameGenius;
    case 'gameMemoria':
      return gameMemoria;
    case 'gameRescue':
      return gameRescue;
    case 'gameSnake':
      return gameSnake;
    case 'gameSpace':
      return gameSpace;
    case 'gameVelha':
      return gameVelha;
    case 'landingPage':
      return landingPageEcommerce;
    case 'pleiflix':
      return pleiflix;
    case 'pleiGames':
      return pleiGames;
    case 'pleiWeather':
      return pleiWeather;
    case 'portfolioOne':
      return portfolioOne;
    default:
      return defaultImage;
  }
}

export default Iconimg;
