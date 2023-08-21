import { Navigate, Route, Routes, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Main from '../layout/Main'
import Contact from '../pages/contact/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
       {
         path: '*',
         element: <Home />,
       },
    ],
  },
])
