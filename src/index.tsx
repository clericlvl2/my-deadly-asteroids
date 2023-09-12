import './styles/styles.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import queryClient from './api/query/queryClient.ts';

import { App } from './components';
import { BrowserRouter } from 'react-router-dom';
import { DEPLOY_BASENAME } from './utils/constants.ts';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={DEPLOY_BASENAME}>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
