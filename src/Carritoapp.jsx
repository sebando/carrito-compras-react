import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./Component/NavBar"
import { ProductPage } from "./pages/ProductPage"
import { Cart } from "./pages/Cart"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"

export const Carritoapp = () => {
  return (
    <ProductProvider>
      <CartProvider>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<ProductPage/>}></Route>
          <Route path='/carrito' element={<Cart/>}></Route>
          <Route path='/*' element ={<Navigate to='/'/>}></Route>

        </Routes>

      </div>
      </CartProvider>
    </ProductProvider>
  )
}
