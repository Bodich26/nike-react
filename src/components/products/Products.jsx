import styles from './Products.module.scss';
import Desk from './../../img/Desk.png';

const Products = ({ img, title }) => {
  return (
    <div className={styles['products']}>
      <img className={styles['products__post']} src={img} alt="Products" />
      <img className={styles['products__desk']} src={Desk} alt="Desk" />
      <h3 className={styles['products__title']}>{title}</h3>
    </div>
  );
};

export default Products;
