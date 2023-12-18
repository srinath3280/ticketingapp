import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './features/user/login';
import Dashboard from './features/dashboard/dashboard';
import AddTicket from './features/dashboard/addtickets';
import ListTickets from './features/dashboard/listtickets';
import RegisterForm from './features/user/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"",
        element:<Login></Login>
      },
      {
        path:"/registerForm",
        element:<RegisterForm></RegisterForm>
      },
      {
        path:"/dashboard/:id",
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:"/dashboard/:id/addticket",
            element:<AddTicket></AddTicket>
          },
          {
            path:"/dashboard/:id",
            element:<ListTickets></ListTickets>
          },
          {
            path:`/dashboard/:id/listTickets`,
            element:<ListTickets></ListTickets>
          }
        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
