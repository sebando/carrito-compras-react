import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { Card } from "../Component/Card"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"


export const ProductPage = () => {

  const { products } = useContext(ProductContext)
  const {shopingList, addProduct, removeProduct} = useContext(CartContext)

  return (
    <>
      <h1>Productos</h1>
      <hr />
      {products.map(producto => (
        <Card
          key={producto.id}
          id={producto.id}
          image={producto.image}
          title={producto.title}
          description={producto.description}
          price={producto.price}
          handlerAdd = {() => addProduct(producto)}
          handlerRemove = {() => removeProduct(producto.id)}
        />
      ))}

    </>
  )
}
