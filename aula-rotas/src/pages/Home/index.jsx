import styles from './styles.module.css'
import tenis from '../../assets/tenis.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <img src={tenis} alt="Logo Adidas" />
      <p>Para um melhor ajuste nos pés, recomendamos a compra de um tamanho menor do que o seu usual. Forma grande.* Estilo atemporal para diversos momentos e combinações. Com modelo clássico, o tênis adidas Breaknet traz as listras icônicas da marca nas laterais, com opções de cores lisas e também animal print. Desenvolvido com material resistente e firme, traz perfuros para respirabilidade, forro acolchoado e solado resistente ao desgaste. Um tênis masculino versátil para usar com peças que vão da calça jeans à calça jogger ou bermudas masculinas. Conte com a Adidas para complementar o seu look urbano!</p>
    </div>
  )
}