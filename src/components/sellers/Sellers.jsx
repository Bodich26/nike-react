import styles from './Sellers.module.scss';
import './../../styles/container.scss';
import Poster from '../poster/Poster';

import Effect from './../../img/Effect1.png';
import Women from './../../img/sellers1.jpg';
import Kids from './../../img/sellers2.jpg';
import Men from './../../img/sellers3.jpg';
import Decor from './../../img/ezShose2.png';

const SellerPosts = [
  {
    id: 1,
    title: 'Women',
    img: Women,
  },
  {
    id: 2,
    title: 'Kids',
    img: Kids,
  },
  {
    id: 3,
    title: 'Men',
    img: Men,
  },
];

const Sellers = () => {
  return (
    <section className={styles['sellers']}>
      <div className={styles['sellers__decor']}>
        <img src={Decor} alt="Decor" />
      </div>
      <div className="container">
        <div className={styles['sellers__box']}>
          <img
            className={styles['sellers__box-effect']}
            src={Effect}
            alt="Effect"
          />
          <h3 className={styles['sellers__box-title']}>BEST SELLERS</h3>
        </div>
        <div className={styles['sellers__wrap']}>
          {SellerPosts.map((item) => {
            return (
              <Poster poster={item.img} title={item.title} key={item.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sellers;
