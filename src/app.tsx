import React from 'react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import retry from 'utils/client';
import Main from 'main';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <IntlProvider locale="en" defaultLocale="en">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  </QueryClientProvider>
);

export default App;
