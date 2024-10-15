interface Product { productId: string, quantity: number, price: number }
type Products = Product[]

export class ShoppingCart {
  readonly cartId: string
  private readonly items: Products

  constructor (cartId: string, items: Products) {
    this.cartId = cartId
    this.items = items
  }
}

const cart = new ShoppingCart('cart1', [
  { productId: 'pro1', quantity: 1, price: 25000 },
  { productId: 'pro1', quantity: 2, price: 35000 },
  { productId: 'pro1', quantity: 3, price: 40000 }
])

console.log(cart)
