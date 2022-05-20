import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './style/global';
import { CoreProvider } from './provider/Core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoreProvider>
      <>
        <GlobalStyles />
        <App />
      </>
    </CoreProvider>
  </React.StrictMode>,
);
