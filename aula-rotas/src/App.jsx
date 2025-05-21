import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import logo from './assets/logo-adidas.png'
import Products from './pages/Products'
import './App.css'

function App() {

  return (
    <>
    <div>
      <nav className="menuBar">
          <div><img className="logo" src={logo} alt="Logo" /></div>
          <div className="menuTitle">
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/sobre">Sobre</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
    </div>
    </>
  )
}

export default App

{/* <ThemeProvider>
      <PaginaInicial />
    </ThemeProvider> */}

