import ProductList from '../../components/ProductList';

export default function Products({ addToCart, cartItems }) {
  // ESSA FUNÇÃO É CHAMADA QUANDO O USUÁRIO CLICA NO BOTÃO "ADICIONAR AO CARRINHO" EM CADA PRODUTO
  // A FUNÇÃO addToCart É PASSADA COMO PROPS DO COMPONENTE PAI (App.jsx)
  const handleAdd = (product) => {
    addToCart([...cartItems, product])
  }

  return (
    <div style={{ padding: '1rem' }}>
      <ProductList addToCart={handleAdd} />
    </div>
  )
}
