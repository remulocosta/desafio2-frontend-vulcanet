import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --buttonface: #F4F7FC;
    --secondary: #F5F5F5;
    --tertiary: #DDDDDD;

    --black: rgba(0,0,0, 0.8);
    --blue: #00A6CE;
    --white: #FFFFFF;
    --green: #43B998;
    --gray: #999999;
    --text-black: #222222;
    --text-button: #4A507B;

  }

  * {
    padding: 0px;
    margin: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  body {
    background: #E5E5E5;
    color: #333333;
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
