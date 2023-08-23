import {  createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Main from '../layout/Main'
import Contact from '../pages/contact/Contact'
import AllService from './../pages/allService/AllService'

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
        path: '/allservice',
        element: <AllService></AllService>,
      },
      {
        path: '*',
        element: <Home />,
      },
    ],
  },
])
 