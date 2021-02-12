import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from 'redux/store';
import ErrorBoundary from 'utils/ErrorBoundary';
import NoConnection from 'utils/NoConnection';
import { Snackbar } from 'utils/snackbar';
import theme from 'theme';
import Routes from 'routes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Snackbar>
          <CssBaseline />
          <NoConnection />
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </Snackbar>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
