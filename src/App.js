import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';
import ErrorBoundary from 'utils/ErrorBoundary';
import NoConnection from 'utils/NoConnection';
import { Snackbar } from 'utils/snackbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Snackbar>
        <CssBaseline />
        <NoConnection />
        <ErrorBoundary>
          <h1>Weeeeee!</h1>
        </ErrorBoundary>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
