
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './app/Providers/Router.jsx'
import './shared/styles/global.scss'


createRoot(document.getElementById('root')).render(

  <RouterProvider router={Router}
    future={{ v7_startTransition: true }} />
)
