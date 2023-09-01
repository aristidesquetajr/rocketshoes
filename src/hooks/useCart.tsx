import { ReactNode, createContext, useContext, useState } from 'react'
import { Product } from '../types'

interface CartProviderProps {
  children: ReactNode
}

interface CartContextData {
  cart: Product[]
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = window.localStorage.getItem('@RocketShoes:cart')

    return storagedCart ? JSON.parse(storagedCart) : []
  })
  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext)

  return context
}
