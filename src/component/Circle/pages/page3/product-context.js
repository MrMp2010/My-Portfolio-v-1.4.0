"use client"

import { createContext, useContext, useState } from "react"

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, count: 3, title: "pc", aboutProduc: "100,00",discripshen: "this is pc" },
    { id: 2, count: 8, title: "phone", aboutProduc: "25,000",discripshen: "this is phone" },
    { id: 3, count: 8, title: "airpod", aboutProduc: "5,000",discripshen: "this is airpod" },
  ])

  function plusHandler(productId) {
    const newProducts = [...products]
    const index = newProducts.findIndex((p) => p.id === productId)
    if (index !== -1) {
      newProducts[index].count += 1
      setProducts(newProducts)
    }
  }

  function minusHandler(productId) {
    const newProducts = [...products]
    const index = newProducts.findIndex((p) => p.id === productId)
    if (index !== -1 && newProducts[index].count > 0) {
      newProducts[index].count -= 1
      setProducts(newProducts)
    }
  }

  function deleteHandler(productId) {
    const newProducts = products.filter((p) => p.id !== productId)
    setProducts(newProducts)
  }

  function resetHandler() {
    const newProducts = products.map((p) => ({ ...p, count: 0 }))
    setProducts(newProducts)
  }

  const sumProducts = () => {
    return products.reduce((total, p) => total + p.count, 0)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        plusHandler,
        minusHandler,
        deleteHandler,
        resetHandler,
        sumProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider")
  }
  return context
}