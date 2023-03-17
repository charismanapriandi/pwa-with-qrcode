import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import Layout from './components/Layout';
import Todo from './pages/Todo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/todo',
        element: <Todo />
      }
    ]
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
