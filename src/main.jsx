
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './app/Providers/Router.jsx'

createRoot(document.getElementById('root')).render(

  <RouterProvider router={Router}/>
)
