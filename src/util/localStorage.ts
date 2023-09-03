import { Product } from '../types'

export function getStorage(): Product[] {
  const cart = window.localStorage.getItem('@RocketShoes:cart')!

  return JSON.parse(cart) ?? []
}

export function updateStorage(cart: Product[]) {
  window.localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart))
}
