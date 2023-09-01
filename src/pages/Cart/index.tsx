import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline
} from 'react-icons/md'

import styles from './styles.module.scss'

export function Cart() {
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
          <tr data-testid="product">
            <td>
              <img
                src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
                alt="Tênis de Caminhada Leve Confortável"
              />
            </td>
            <td>
              <strong>Tênis de Caminhada Leve Confortável</strong>
              <span>R$ 179,90</span>
            </td>
            <td>
              <div>
                <button type="button" data-testid="decrement-product">
                  <MdRemoveCircleOutline size={20} />
                </button>
                <input
                  type="text"
                  data-testid="product-amount"
                  readOnly
                  value={2}
                />
                <button type="button" data-testid="increment-product">
                  <MdAddCircleOutline size={20} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 359,80</strong>
            </td>
            <td>
              <button type="button" data-testid="remove-product">
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <footer>
        <button type="button">Finalizar pedido</button>

        <div className={styles.total}>
          <span>TOTAL</span>
          <strong>R$ 359,80</strong>
        </div>
      </footer>
    </div>
  )
}
