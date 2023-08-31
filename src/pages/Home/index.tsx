import { MdAddShoppingCart } from 'react-icons/md'

import styles from './styles.module.scss'

export function Home() {
  return (
    <ul className={styles.productList}>
      <li>
        <img
          src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
          alt="Tênis de Caminhada Leve Confortável"
        />
        <strong>Tênis de Caminhada Leve Confortável</strong>
        <span>R$ 179,90</span>
        <button type="button">
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />0
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
          alt="Tênis de Caminhada Leve Confortável"
        />
        <strong>Tênis de Caminhada Leve Confortável</strong>
        <span>R$ 179,90</span>
        <button type="button">
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />0
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
          alt="Tênis de Caminhada Leve Confortável"
        />
        <strong>Tênis de Caminhada Leve Confortável</strong>
        <span>R$ 179,90</span>
        <button type="button">
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />0
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ul>
  )
}
