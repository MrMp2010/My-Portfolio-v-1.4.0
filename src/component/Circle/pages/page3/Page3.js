// page3/Page3.js
"use client"
import ShoppingCart from "./ShoppingCart"
import Navbar from "./Navbar"
import Users from "./Users"
import Home from "./Home"
import Register from "./Register"
import Login from "./Login"
import User from "./User"
import { Route, Routes, useLocation } from "react-router-dom"
import Notfound from "./Notfound"
import Dashbord from "./Dashbord"
import LogOut from "./LogOut"
import ProtectedRoute from "./ProtectRoute"
import Products from "./Products"
import { AuthProvider, useAuth } from "./auth-context"
import { ProductProvider, useProduct } from "./product-context" 

const Page3Content = () => {
  const location = useLocation()
  const hideNavbar = location.pathname.includes("/users/") && location.pathname.split("/").length > 3 
  const { products, plusHandler, minusHandler, deleteHandler, resetHandler, sumProducts } = useProduct() 
  const { user, login, logout } = useAuth()

  const handleLogin = () => {
    login()
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      {!hideNavbar && <Navbar user={user} totalProductsInCart={sumProducts()}  />}
      <div className="container mt-3">
        <Routes>
          <Route path="" element={<Home />} />
          <Route
            path="users/:id"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route path="logout" element={<LogOut onLogout={handleLogout} />} />
          <Route
            path="users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="register" element={<Register />} />
          <Route
            path="dashbord"
            element={
              <ProtectedRoute>
                <Dashbord />
              </ProtectedRoute>
            }
          />
          <Route
            path="products"
            element={
              <ProtectedRoute>
                <Products
                
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <ShoppingCart />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  )
}

const Page3 = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        
        <Page3Content />
      </ProductProvider>
    </AuthProvider>
  )
}

export default Page3