import { MdShoppingBasket } from 'react-icons/md'

import logoImag from '../../assets/images/logo.svg'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()
  const cartSize = cart.length

  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logoImag} alt="Rocketshoes" />
      </Link>
      <Link to="/cart" className={styles.cart}>
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Link>
    </header>
  )
}
