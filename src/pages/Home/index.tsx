import { useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import styles from './styles.module.scss'
import { Product } from '../../types'
import { api } from '../../services/api'
import { formatPrice } from '../../util/format'

type IProduct = Omit<Product, 'amount'>

export function Home() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get<IProduct[]>('products')
      setProducts(data)
    }

    loadProducts()
  }, [])

  return (
    <ul className={styles.productList}>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
            />
            <strong>{product.title}</strong>
            <span>{formatPrice(product.price)}</span>
            <button type="button">
              <div data-testid="cart-product-quantity">
                <MdAddShoppingCart size={16} color="#FFF" />0
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
