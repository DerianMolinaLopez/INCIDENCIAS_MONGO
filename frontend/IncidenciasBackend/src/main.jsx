// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Incidencias from './pages/Incidencias';
import JefeTecnicoInicio from './pages/JefeTecnicoInicio';
import TecnicoInicio from './pages/TecnicoInicio';
import IncidenciasTablas from './pages/IncidenciasTablas';
import CapturaEquipo from './pages/CapturaEquipo';
import CapturaEdificios from './pages/CapturaEdificios';
import CapturaEquipos from './pages/CapturaEquipos';
import CapturaAulas from './pages/CapturaAulas';
import Layout from './Layout/Layout';
import { GlobalProvider } from './context/globalContext';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/incidencias',
    element: <Layout />,
    children: [
      {
        path: "/incidencias/crear-incidencia",
        element: <Incidencias />
      },
      {
        path: "/incidencias/tablas",
        element: <IncidenciasTablas />
      },
      {
        path: "/incidencias/captura-edificios",
        element: <CapturaEdificios />
      },
      {
        path: "/incidencias/captura-aulas",
        element: <CapturaAulas />
      }
      ,
      {
        path: "/incidencias/captura-equipos",
        element: <CapturaEquipos/>
      }
    ]
  },
  {
    path: '/jefe-tecnico',
    element: <JefeTecnicoInicio />
  },
  {
    path: '/tecnico',
    element: <TecnicoInicio />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
