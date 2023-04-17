import { ThemeProvider, createGlobalStyle } from "styled-components";

export default function LayoutProvider({ children }) {
    return (
        <ThemeProvider theme={{}} >
            {children}
            <GlobalStyles />
        </ThemeProvider>
    )
}

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    /* colors */
    --color-100: #134074;
    --color-200: #13315C;
    --color-300: #0B2545;
    --color-400: #8DA9C4;
    --color-500: #EEF4ED;

    --color-white: #e2e2e2;
    
    --color-black-50: rgba(103, 103, 103, 0.6);
    --color-black-100: #3a3a3a;
    --color-black-200: #272727;
    --color-black-300: #202020;
    
    /* padding */
    --pad-default: 16px;
    --pad-med: calc( var(--pad-default) / 2 );

    /* radius */
    --radius-default: 6px;
  }

  html {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    
    /* background-color: var(--color-black-100); */
    background-image: linear-gradient(
      var(--color-black-100), var(--color-black-300)
      );
    color: var(--color-white);

    font-family: sans-serif, Arial, Helvetica;
    
    display: flex;
    flex-direction: column;
  }
`