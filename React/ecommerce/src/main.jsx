import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <CartProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CartProvider>
)
