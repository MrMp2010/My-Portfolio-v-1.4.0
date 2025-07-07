import Page2 from "../page2/Page2"
import { useProduct } from "./product-context" 
const Products = () => {
  const { products, plusHandler, minusHandler, deleteHandler, resetHandler } = useProduct() 
  return (
    <>
      <Page2 products={products} onPlus={plusHandler} onMinus={minusHandler} onDelete={deleteHandler} onReset={resetHandler} />
    </>
  )
}
export default Products