import isPropValid from '@emotion/is-prop-valid';
import { AppProps } from 'next/app';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { Dashboard } from './dashboard';

function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Dashboard />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
