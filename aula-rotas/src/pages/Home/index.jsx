import styles from './styles.module.css'
import tenis from '../../assets/tenis.png'
import adidasFeminino from '../../assets/adidas-f.jpg'
import adidasMasculino from '../../assets/adidas-m.jpg'
import adidasTenis from '../../assets/adidas-tenis.png'
import adidasTenisWhite from '../../assets/adidas-tenis2.png'

export default function Home() {
  return (
    <>
      <img className={styles.imgHome} src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/5716189_ADICLUB_DAYS_SS_25_BR_DAT_ONSITE_MHLARGE_D_2880_X1280_PROMO_24e00eba70.png' alt="Tênis" />
      <div className={styles.container}>
        <div className={styles.containerCard}>
          <img className={styles.imgCard} src='https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/673762417e0745a6b8b2af240128d21c_9366/camiseta-treino-alongamento-train-essentials.jpg' alt="Tênis" />
          <h3>Training</h3>
        </div>
        <div className={styles.containerCard}>
          <img className={styles.imgCard} src='https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/673762417e0745a6b8b2af240128d21c_9366/camiseta-treino-alongamento-train-essentials.jpg' alt="Tênis" />
          <h3>Training</h3>
        </div>
        <div className={styles.containerCard}>
          <img className={styles.imgCard} src='https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/673762417e0745a6b8b2af240128d21c_9366/camiseta-treino-alongamento-train-essentials.jpg' alt="Tênis" />
          <h3>Training</h3>
        </div>
        <div className={styles.containerCard}>
          <img className={styles.imgCard} src='https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/673762417e0745a6b8b2af240128d21c_9366/camiseta-treino-alongamento-train-essentials.jpg' alt="Tênis" />
          <h3>Training</h3>
        </div>
      </div>
      <img className={styles.imgHome} src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/PE_Basketball_Classics_1_22216_basketball_ss25_launch_wglp_banner_D_09269f2d77.jpg' alt="Tênis" />
      <img className={styles.imgHome} src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/statement_br_d_d62c9d33ab.jpg' alt="Tênis" />
      <img className={styles.imgHome} src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/5706747_AADICLUB_DAYS_SS_25_BR_DAT_ADAPTATIONS_ONSITE_VOUCHER_Statement_Banner_D_2880x740_V3_10f4074339.png' alt="Tênis" />
    </>
  )
}