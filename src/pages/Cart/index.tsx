import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline
} from 'react-icons/md'

import styles from './styles.module.scss'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../util/format'
import { Product } from '../../types'

export function Cart() {
  const { cart, removeProduct, updateProductAmount } = useCart()

  const total = formatPrice(
    cart.reduce((sumTotal, { price, amount }) => {
      sumTotal += price * amount
      return sumTotal
    }, 0)
  )

  function handleProductIncrement({ id, amount }: Product) {
    updateProductAmount({ productId: id, amount: amount + 1 })
  }

  function handleProductDecrement({ id, amount }: Product) {
    updateProductAmount({ productId: id, amount: amount - 1 })
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  return (
    <div className={styles.container}>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, image, title, price, amount }, index, products) => (
            <tr data-testid="product" key={id}>
              <td>
                <img src={image} alt={title} />
              </td>
              <td>
                <strong>{title}</strong>
                <span>{formatPrice(price)}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={amount <= 1}
                    onClick={() => handleProductDecrement(products[index])}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement(products[index])}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{formatPrice(price * amount)}</strong>
              </td>
              <td>
                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={() => handleRemoveProduct(id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer>
        <button type="button">Finalizar pedido</button>

        <div className={styles.total}>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </div>
      </footer>
    </div>
  )
}
