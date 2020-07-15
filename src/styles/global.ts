import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    padding: 0px;
    margin: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  body {
    background: #F5F8FA;
    color: #999999;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, p, span {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
