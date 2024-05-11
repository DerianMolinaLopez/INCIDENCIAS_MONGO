import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Incidencias from './pages/Incidencias.jsx';
import JefeTecnicoInicio from './pages/JefeTecnicoInicio.jsx';
import TecnicoInicio from './pages/TecnicoInicio.jsx';
import IncidenciasTablas from './pages/IncidenciasTablas.jsx';
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
      },
      {
        path:"/incidencias/tablas",
        element:<IncidenciasTablas/>
      }
    ]
  },
  {
    path:'/jefe-tecnico',
    element:<JefeTecnicoInicio/>
  
  },
  {
   path:'/tecnico',
   element:<TecnicoInicio/>

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Asegúrate de proporcionar el enrutador como prop 'router' */}
  </React.StrictMode>
);

