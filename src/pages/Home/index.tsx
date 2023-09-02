import { useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import styles from './styles.module.scss'
import { Product } from '../../types'
import { api } from '../../services/api'
import { formatPrice } from '../../util/format'
import { useCart } from '../../hooks/useCart'

type IProduct = Omit<Product, 'amount'>

interface CartItemsAmount {
  [key: number]: number
}

export function Home() {
  const [products, setProducts] = useState<IProduct[]>([])
  const { cart, addProduct } = useCart()

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    Object.assign(sumAmount, {[product.id]: product.amount})
    return sumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get<IProduct[]>('products')
      setProducts(data)
    }

    loadProducts()
  }, [])

  function handleAddProduct(id: number) {
    addProduct(id)
  }

  return (
    <ul className={styles.productList}>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{formatPrice(product.price)}</span>
            <button
              type="button"
              data-testid="add-product-button"
              onClick={() => handleAddProduct(product.id)}
            >
              <div data-testid="cart-product-quantity">
                <MdAddShoppingCart size={16} color="#FFF" />
                {cartItemsAmount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
