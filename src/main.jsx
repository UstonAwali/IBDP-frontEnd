import React, { isValidElement } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import LandingPage from './pages/landingpage.jsx'
import StokPage from './pages/stokdarah.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import DonorPage from './pages/donor.jsx'
import ForumPage from './pages/forum.jsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <LandingPage />,
  errorElement:<ErrorPage/>
},
{
  path:"login",
  element:<LoginPage/>
},
{
  path:"register",
  element:<RegisterPage/>
},
{
  path: "stokdarah",
  element: <StokPage />
},
{
  path: "formdonor",
  element: <DonorPage />
},
{
  path: "forumberbagi",
  element: <ForumPage />
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
