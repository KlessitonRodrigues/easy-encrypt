import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle(
  ({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 16px;
    }
    body {
      font-size: ${theme.fontSize.body};
      height: 100vh;
      width: 100vw;
      max-height: 100vh;
      max-width: 100vw;
      overflow: hidden;
    }
    html,
    body {
      font-family: 'Roboto', sans-serif;
      background-color: ${theme.colors.bg3};
      color: ${theme.colors.text1};
    }
    h1 {
      font-size: ${theme.fontSize.h1};
    }
    h2 {
      font-size: ${theme.fontSize.h2};
    }
    h3 {
      font-size: ${theme.fontSize.h3};
    }
    h4 {
      font-size: ${theme.fontSize.h4};
    }
    h5 {
      font-size: ${theme.fontSize.h5};
    }
    h6 {
      font-size: ${theme.fontSize.h6};
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;
    }
    div::-webkit-scrollbar {
      width: ${theme.size(2)};
    }
    div::-webkit-scrollbar-track {
      background: #0000;
    }
    div::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray};
      border-radius: 2px;
    }
    div::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.main};
    }
    #root {
      width: 100%;
      height: 100%;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .fadeIn {
      animation-name: fadeIn;
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    .fadeOut {
      animation-name: fadeOut;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    .fadeInUp {
      animation-name: fadeInUp;
    }

    @keyframes fadeOutDown {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
    }

    .fadeOutDown {
      animation-name: fadeOutDown;
    }

    @keyframes rotate90 {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
    }

    .rotate90 {
      animation-name: rotate90;
    }
  `
);
