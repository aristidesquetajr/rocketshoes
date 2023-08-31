import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Routes } from './routes'
import { CartProvider } from './hooks/useCart'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
