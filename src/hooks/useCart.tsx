import { ReactNode, createContext, useContext, useState } from 'react'
import { Product, Stock } from '../types'
import { toast } from 'react-toastify'
import { api } from '../services/api'

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartContextData {
  cart: Product[]
  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
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

  const updateProductAmount = async ({
    productId,
    amount
  }: UpdateProductAmount) => {
    try {
      const stock = (await api.get<Stock>(`/stock/${productId}`)).data

      if (stock.amount < amount) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }

      setCart((prevCart) => {
        const newCart = prevCart.map((cartProps) => {
          if (cartProps.id === productId) {
            cartProps.amount = amount
          }

          return cartProps
        })

        window.localStorage.setItem(
          '@RocketShoes:cart',
          JSON.stringify(newCart)
        )

        return newCart
      })
    } catch {
      toast.error('Erro na alteração de quantidade do produto')
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext)

  return context
}
