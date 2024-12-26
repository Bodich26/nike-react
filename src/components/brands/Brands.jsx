import styles from './Brands.module.scss';

import adidas from '../../img/brands/adidas.png';
import balance from '../../img/brands/balance.png';
import jordan from '../../img/brands/jordan.png';
import convarse from '../../img/brands/convarse.png';
import nike from '../../img/brands/nike.png';
import puma from '../../img/brands/puma.png';
import reebok from '../../img/brands/reebok.png';
import vans from '../../img/brands/vans.png';

const Brands = () => {
  return (
    <section className={styles.brands}>
      <div className={styles.brands__wrap}>
        <img className={styles.brands__img} src={adidas} alt="Adidas" />
        <img className={styles.brands__img} src={nike} alt="Nike" />
        <img className={styles.brands__img} src={puma} alt="Puma" />
        <img className={styles.brands__img} src={convarse} alt="Convarse" />
        <img className={styles.brands__img} src={reebok} alt="Reebok" />
        <img className={styles.brands__img} src={vans} alt="Vans" />
        <img className={styles.brands__img} src={jordan} alt="Jordan" />
        <img className={styles.brands__img} src={balance} alt="Balance" />
      </div>
    </section>
  );
};

export default Brands;
