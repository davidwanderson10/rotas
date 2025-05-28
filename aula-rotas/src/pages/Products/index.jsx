import React, {useState} from 'react';
import ProductList from '../../components/ProductList';
import styles from './style.module.css';


export default function Products({ addToCart, cartItems }) {
  const [category, setCategory] = useState('All');

  // ESSA FUNÇÃO É CHAMADA QUANDO O USUÁRIO CLICA NO BOTÃO "ADICIONAR AO CARRINHO" EM CADA PRODUTO
  // A FUNÇÃO addToCart É PASSADA COMO PROPS DO COMPONENTE PAI (App.jsx)
  const handleAdd = (product) => {
    addToCart([...cartItems, product])
  }

  return (
    <div>
      <div className={styles.categories}>
        <button 
          className={category === 'Masculino' ? styles.active : ''} 
          onClick={() => setCategory('Masculino')}
        >
          Masculino
        </button>

        <button 
          className={category === 'Feminino' ? styles.active : ''} 
          onClick={() => setCategory('Feminino')}
        >
          Feminino
        </button>

        <button 
          className={category === 'Infantil' ? styles.active : ''} 
          onClick={() => setCategory('Infantil')}
        >
          Infantil
        </button>
      </div>

      <div style={{ padding: '1rem' }}>
        <ProductList addToCart={handleAdd} category={category}/>
      </div>

    </div>
  )
}
