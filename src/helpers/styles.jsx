import { css } from 'styled-components';

const mixin = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 9.3em;
  `,

  flexEvenly: css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `,

  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  flexWrapFlow: css`
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    padding: 0 9.3em;

    @media screen and (max-width: 375px) {
      flex-direction: column;
      padding: 0 .6em;
    }
  `,

  button: css`
    text-decoration: none;
    color: var(--color-txt-two);
    border: .06em solid var(--color-ln-two);
    border-radius: .4em;
    margin: 4rem 0 0;
    padding: 1em;
    font-family: var(--font-details);
    font-size: .9em;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: var(--color-bg-hover-button);
    }
  `,

  pageCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,

  title: css`
    font-size: 1.8em;

    @media screen and (max-width: 375px) {
      font-size: 1.3em;
    }
  `,

  titleDetails: css`
    color: var(--color-txt-six);
    font-family: var(--font-details);
    font-size: 1em;
    font-weight: 400;

    @media screen and (max-width: 375px) {
      font-size: .9em;
    }
  `,
};

export default mixin;
