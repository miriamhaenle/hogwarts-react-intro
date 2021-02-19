import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 1.25rem;
  margin: 0 auto;
  max-width: 500px;
}


:root {
  --primary: #2d004d;
  --griffindor: #9c1203;
  --hufflepuff: #033807;
  --slytherin: #E3A000;
  --ravenclaw: #00165e;
}

`;
