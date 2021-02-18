import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  font-family: sans-serif;
  margin: 0;
  font-size: 112.5%;
}


:root {
  --primary: palevioletred;
  --secondary: rebeccapurple;
  --warning: tomato;
  --success: #badaba;
}

`;
