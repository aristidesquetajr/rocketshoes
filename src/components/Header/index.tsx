import { MdShoppingBasket } from 'react-icons/md'

import logoImag from '../../assets/images/logo.svg'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logoImag} alt="Rocketshoes" />
      </Link>
      <Link to="/cart" className={styles.cart}>
        <div>
          <strong>Meu carrinho</strong>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Link>
    </header>
  )
}
