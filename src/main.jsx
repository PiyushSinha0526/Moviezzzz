import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { moviesApi } from "./features/apiSlice";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={moviesApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
