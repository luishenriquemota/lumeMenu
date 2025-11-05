import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './style/global.jsx'
import { Providers } from './providers/index.jsx'
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
    </BrowserRouter>
  </StrictMode>,
)
