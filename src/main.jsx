import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './app/Providers/Router.jsx'
import './shared/styles/global.scss'
import { I18nextProvider } from 'react-i18next'
import i18n from './app/Providers/i18n';

createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <RouterProvider router={Router}
      future={{ v7_startTransition: true }} />
  </I18nextProvider>
)
