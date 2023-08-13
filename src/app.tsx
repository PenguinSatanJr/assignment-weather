import React from 'react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'main/main';
import retry from 'utils/http-error';

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
