import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"

export const Cart = () => {

  const { shopingList, addProduct, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

  const calculateTotal = () => {
    return shopingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  const handlerPurchase = () =>{
    const productsPurchase = shopingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
    Swal.fire({
      icon: 'success',
      title: 'La compra se ha realizado con éxito',
      html: `<p>Has comprado: </p> <pre>${productsPurchase}</pre>`
    })
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>

          {shopingList.map(product => (
            <tr key={product.id}>
              <th scope="row">{product.title}</th>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => decrementQuantity(product.id)}
                >-</button>
                <button
                  className="btn btn-primary"
                >{product.quantity}</button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => incrementQuantity(product.id)}
                >+</button>

              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeProduct(product.id)}>
                  Eliminar
                </button></td>
            </tr>

          ))}
          <tr>
            <th><b>Total:  </b></th>
            <td></td>
            <td></td>
            <td>{calculateTotal()}</td>
          </tr>

        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" 
        type="button"
        onClick={handlerPurchase}
        >Comprar</button>
      </div>



    </>
  )
}
