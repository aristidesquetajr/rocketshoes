import logoImag from '../../assets/images/logo.svg'

import './styles.css'

export function Header() {
  return (
    <header className="container">
      <a href="#">
        <img src={logoImag} alt="" />
      </a>
      <div className="car">
        <strong>Meu carrinho</strong>
      </div>
    </header>
  )
}
