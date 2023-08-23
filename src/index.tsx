import React, {StrictMode, Suspense} from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
      <Suspense fallback={<>Loading...</>}>
          <Router history={history}>
              <App />
          </Router>
      </Suspense>
  </StrictMode>
);
