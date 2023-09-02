import { ReactNode, createContext, useContext, useState } from 'react'
import { Product } from '../types'
import { toast } from 'react-toastify'
import { api } from '../services/api'

interface CartProviderProps {
  children: ReactNode
}

interface CartContextData {
  cart: Product[]
  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = window.localStorage.getItem('@RocketShoes:cart')!

    return JSON.parse(storagedCart) ?? []
  })

  async function addProduct(productId: number) {
    try {
      const product = (await api.get<Product>(`/products/${productId}`)).data
      product.amount = 1

      setCart((prevCart) => {
        const productInCart = prevCart.find(({ id }) => id === product.id)

        if (productInCart) {
          return prevCart
        }

        const newCart = [...prevCart, product]

        window.localStorage.setItem(
          '@RocketShoes:cart',
          JSON.stringify(newCart)
        )

        return newCart
      })
    } catch {
      toast.error('Erro na adição do produto')
    }
  }

  function removeProduct(productId: number) {
    try {
      setCart((prevCart) => {
        const newCart = prevCart.filter(({ id }) => id != productId)

        window.localStorage.setItem(
          '@RocketShoes:cart',
          JSON.stringify(newCart)
        )

        return newCart
      })
    } catch {
      toast.error('Erro na remoção do produto')
    }
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext)

  return context
}
