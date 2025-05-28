import style from './style.module.css'

export default function CartSidebar({ cartItems, closeCart }) {

  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('R$', '').replace(',', '.'))
    return acc + price
  }, 0)

  return (
    <div className={style.overlay} onClick={closeCart}>
      <div className={style.sidebar} onClick={(e) => e.stopPropagation()}>
        <button className={style.close} onClick={closeCart}>X</button>
        <h2>Carrinho</h2>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
        <ul>
            {cartItems.map((item, index) => (
              <li key={index}> <img src={item.image} alt={item.name} style={{width: '30%'}}/> <br></br>{item.name} - {item.price}</li>
            ))}
        </ul>
        )}
        <hr />
        <p><strong>Total:</strong> R$ {total.toFixed(2).replace('.', ',')}</p>
      </div>
    </div>
  )
}