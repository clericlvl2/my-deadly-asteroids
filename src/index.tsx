import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.scss';
import queryClient from './api/query/queryClient.ts';
import { App } from './components';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
