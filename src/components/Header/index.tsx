import { MdShoppingBasket } from 'react-icons/md'

import logoImag from '../../assets/images/logo.svg'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <a href="/">
        <img src={logoImag} alt="Rocketshoes" />
      </a>
      <a href="/cart" className={styles.cart}>
        <div>
          <strong>Meu carrinho</strong>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </a>
    </header>
  )
}
