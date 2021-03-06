// frontend/src/index.js

// ************* src/index.js without Modal *************
import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';

import configureStore from './store';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// ************* src/index.js with Modal ****************
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import { ModalProvider } from "./context/Modal";

// import configureStore from "./store";
// import { restoreCSRF, csrfFetch } from "./store/csrf";
// import * as sessionActions from "./store/session";

// const store = configureStore();

// if (process.env.NODE_ENV !== "production") {
//   restoreCSRF();

//   window.csrfFetch = csrfFetch;
//   window.store = store;
//   window.sessionActions = sessionActions;
// }

// function Root() {
//   return (
//     <Provider store={store}>
//       <ModalProvider>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </ModalProvider>
//     </Provider>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
