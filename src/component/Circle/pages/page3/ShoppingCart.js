import { useProduct } from "./product-context" 
const ShoppingCart = () => {
  const { sumProducts } = useProduct()

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>تعداد کل محصولات در انبار: {sumProducts()}</p>
    </div>
  )
}
export default ShoppingCart