import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

import { Header } from './components/Header'
import { Routes } from './routes'
import { CartProvider } from './hooks/useCart'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
