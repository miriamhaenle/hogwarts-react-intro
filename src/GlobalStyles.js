import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 112.5%font-size;
}

:root {
  --primary: hotpink;
  --secondary: papayawhip;
}


`;
