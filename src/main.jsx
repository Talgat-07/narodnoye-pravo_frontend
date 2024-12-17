
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './app/Providers/Router.jsx'
import { Provider } from 'react-redux'
import './shared/styles/global.scss'
import store from 'app/store.js'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={Router}
      future={{ v7_startTransition: true }} />
  </Provider>
)
