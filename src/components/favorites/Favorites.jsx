import styles from './Favorites.module.scss';
import './../../styles/container.scss';

import product1 from '../../img/products/product-1.png';
import product2 from '../../img/products/product-2.png';
import product3 from '../../img/products/product-3.png';

const Favorites = () => {
  return (
    <section className={styles.favorites}>
      <div className="container">
        <h3 className={styles.favorites__title}>
          Our Favorite <span>Nike</span> styles<span>.</span>
        </h3>
        <div className={styles.favorites__wrap}>
          <div className={styles.favorites__item}>
            <div className={styles['favorites__item-glowball']}></div>
            <h3 className={styles['favorites__item-title']}>
              NIKE Mercurial Superfly
            </h3>
            <div className={styles['favorites__item-box']}>
              <img src={product1} alt="Product-1" />
              <p className={styles['favorites__item-price']}>$271</p>
            </div>
          </div>
          <div className={styles.favorites__item}>
            <div className={styles['favorites__item-glowball']}></div>
            <h3 className={styles['favorites__item-title']}>
              NIKE Air Zoom Alphafly
            </h3>
            <div className={styles['favorites__item-box']}>
              <img src={product2} alt="Product-2" />
              <p className={styles['favorites__item-price']}>$216</p>
            </div>
          </div>
          <div className={styles.favorites__item}>
            <div className={styles['favorites__item-glowball']}></div>
            <h3 className={styles['favorites__item-title']}>NIKE Dunk High</h3>
            <div className={styles['favorites__item-box']}>
              <img src={product3} alt="Product-3" />
              <p className={styles['favorites__item-price']}>$187</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
