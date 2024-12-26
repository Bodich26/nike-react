import styles from './Sports.module.scss';
import './../../styles/container.scss';

import Decor from './../../img/cubing.png';

import Products from '../products/Products';

import Product1 from './../../img/product/Poduct1.png';
import Product2 from './../../img/product/Product2.png';
import Product3 from './../../img/product/Product3.png';
import Product4 from './../../img/product/Product4.png';
import Product5 from './../../img/product/Product5.png';
import Product6 from './../../img/product/Product6.png';

const items = [
  {
    id: 1,
    title: 'Nike Air Max Plus 3',
    img: Product1,
  },
  {
    id: 2,
    title: 'Air Jordan 4 Retro Lightning (Premium Batch)',
    img: Product2,
  },
  {
    id: 3,
    title: 'Air Jordan 13 Retro Court Purple (Reflective)',
    img: Product3,
  },
  {
    id: 4,
    title: 'Air Jordan 1 AJKO Blue Red',
    img: Product4,
  },
  {
    id: 5,
    title: 'Yeezy Boost 350 V2 MX Rock (Real Boost)',
    img: Product5,
  },
  {
    id: 6,
    title: 'Vans Old Skool Suede Honey Gold',
    img: Product6,
  },
];

const Sports = () => {
  return (
    <section className={styles['sports']}>
      <div className="container">
        <div className={styles['sports__wrap']}>
          <div className={styles['sports__titles']}>
            <img className={styles['sports__decor']} src={Decor} alt="Decor" />
            <h3>Sports</h3>
            <span>Time</span>
          </div>
          <div className={styles['sports__box']}>
            {items.map((item) => (
              <Products img={item.img} title={item.title} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
