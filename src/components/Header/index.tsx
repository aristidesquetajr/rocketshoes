import logoImag from '../../assets/images/logo.svg'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <a href="#">
        <img src={logoImag} alt="" />
      </a>
      <div className={styles.car}>
        <strong>Meu carrinho</strong>
      </div>
    </header>
  )
}
