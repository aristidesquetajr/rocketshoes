import { Routes as Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Cart } from './pages/Cart'

export function Routes() {
  return (
    <Switch>
      <Route path="/" Component={Home} />
      <Route path="/cart" Component={Cart} />
    </Switch>
  )
}
