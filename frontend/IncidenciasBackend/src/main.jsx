import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Incidencias from './pages/Incidencias.jsx';
import Layout from './Layout/Layout.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'; // Importa BrowserRouter y RouterProvider

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <Login />
  },
  {
    path:'/incidencias',
    element: <Layout/>,
    children:[
      {
        path:"/incidencias/crear-incidencia",
        element:<Incidencias/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Asegúrate de proporcionar el enrutador como prop 'router' */}
  </React.StrictMode>
);

