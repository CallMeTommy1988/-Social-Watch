import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { store } from "./redux/index"
import { Provider } from "react-redux";
import Router from "./routes/index"
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "./routes/authRoute"
import 'antd/dist/antd.css';
import 'index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <AuthRoute>
          <Router />
        </AuthRoute>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
