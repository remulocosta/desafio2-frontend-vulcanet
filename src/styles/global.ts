import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --black: #222222;
    --blue: #00A7CF;
    --blue-dark: #0085a5;
    --gray: #636466;
    --placeholder: #C7D7E2;
    --red: #E33E1A;
    --white: #FFFFFF;

    --border: #E0E7ED;
    --ticked: #4FC3F7;
    --unticked: #A7B6C2;

    --ballon-user: #D1FADF;
    --email: var(--red);
    --skype: #00AFF0;
    --telefone: #6A4AEA;
    --webchat: #E87C28;
    --whatsapp: #25D366;

    --avatar: rgba(255, 255, 255, 0.2);
    --background: #F5F8FA;
    --border-span:  #a8c9c6;/* rgba(255, 255, 255, 0.8); */

    --font-secondary: #333333;
    --font-tertiary: #999999;

    --primary: #168B7D;
    --secondary: #F8FAFC;
    --tertiary: #7ED5E9;
    --quaternary: #DBF3F8;
    --quinary: #79ACCD;

  }

  * {
    padding: 0px;
    margin: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--font-color);
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    max-width: 1920px;
    max-height: 1080;

    width: 1920px;
    height: 1080px;
  }

  body, input, button, p, span {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
