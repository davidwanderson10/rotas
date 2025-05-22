import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import logo from './assets/logo-adidas.png'
import Products from './pages/Products'
import './App.css'
import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'
import CartSidebar from './components/CartSidebar'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <>
      <div>
        <nav className="menuBar">
          <div><img className="logo" src={logo} alt="Logo" /></div>
          <div className="menuTitle">
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/sobre">Sobre</Link>
            <button className="cartButton" onClick={toggleCart}>
              <FaShoppingCart size={25} style={{color: 'white'}}/>
              {cartItems.length > 0 && <span className="cartCount">{cartItems.length}</span>}
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products addToCart={setCartItems} cartItems={cartItems} />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>

        {showCart && (
          <CartSidebar
            cartItems={cartItems}
            closeCart={() => setShowCart(false)}
          />
        )}
      </div>
    </>
  )
}

export default App