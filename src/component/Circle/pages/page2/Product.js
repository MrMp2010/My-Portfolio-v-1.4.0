"use client"

// src/components/Circle/pages/Product.js
import { useState } from "react"

const Product = ({ title, count, children ,id, onDelete,onPlus, onMinus ,aboutProduc}) => {
  
  const zero = "zero"

  const spanHandler = () => (count === 0 ? zero : count)

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <span className="m-2 text-info">{title}</span> {/* productName به title تغییر کرد */}
      <span className="m-2 badge bg-primary">{spanHandler()}</span>
      <button className="m-2 btn btn-success" onClick={() => onPlus(id)}> 
        +
      </button>
      <button className="m-2 btn btn-warning" onClick={() => onMinus(id)}>
        -
      </button>
      <button className="m-2 btn btn-danger" onClick={() => onDelete(id)}>delete</button>
      {children}
      <p className="mt-2 text-secondary">{aboutProduc}</p>
    </div>
  )
}

export default Product
