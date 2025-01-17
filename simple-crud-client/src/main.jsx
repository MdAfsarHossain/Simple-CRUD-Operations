import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Update from './components/Update.jsx';
import Users from './components/Users.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/users',
    element: <Users />,
    loader: () => fetch('http://localhost:5000/users'),
  },
  {
    path: '/update/:id',
    element: <Update />,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
