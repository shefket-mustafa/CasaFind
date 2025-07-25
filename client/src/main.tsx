import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { PopUpProvider } from './context/PopUpContext.tsx'
import { ListingsProvider } from './context/ListingsContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <ListingsProvider>
    <PopUpProvider>
    <App />
    </PopUpProvider>
    </ListingsProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
