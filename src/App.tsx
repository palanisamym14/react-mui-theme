import React from 'react';
import './App.css';
import AppRouter from './router';
import {
  ApolloProvider,
} from "@apollo/client";

import ThemeProvider from './pages/theme/theme.context';
import { apolloClient } from './apollo'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
