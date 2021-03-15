import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --grey-100: hsl(353, 1%, 97%);
  --grey-200: hsl(353, 10%, 85%);
  --grey-300: hsl(353, 10%, 40%);
  --grey-400: hsl(353, 10%, 25%);
  --grey-500: hsl(353, 10%, 10%);

  --primary-100: hsl(353,100%,96%);
  --primary-200: hsl(353,100%,85%);
  --primary-300: hsl(353, 28%, 36%);
  --primary-400: hsl(353,100%,25%);
  --primary-500: hsl(353,100,10);

  --secondary-100: hsl(173,100%,96%);
  --secondary-200: hsl(173,100%,85%);
  --secondary-300: hsl(173,100%,72%);
  --secondary-400: hsl(173,100%,25%);
  --secondary-500: hsl(173,100%,10%);
}

* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

select,
  input {
    padding: 0.25rem;
    margin: .5rem;
    width: 5rem;
    outline: none;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }
`;
