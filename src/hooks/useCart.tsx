import { ReactNode, createContext, useContext } from 'react'

interface CartProviderProps {
  children: ReactNode
}

interface CartContextData {}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext)

  return context
}
