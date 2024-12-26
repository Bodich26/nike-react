import styles from './Modern.module.scss';
import './../../styles/container.scss';

import ShodeOrange from '../../img/products/product-4.png';
import Button from '../Ui/Button';

const Modern = () => {
  return (
    <section className={styles['modern']}>
      <div className="container">
        <div className={styles['modern__wrap']}>
          <div className={styles['modern__shose']}>
            <img src={ShodeOrange} alt="Shode" />
          </div>
          <div className={styles['modern__box']}>
            <h3 className={styles['modern__box-title']}>
              WE PROVIDE MODERN SHOES
            </h3>
            <p className={styles['modern__box-text']}>
              Design for the way you live your life. Atoms are beautiful in
              their simplicity, supporting your feet with absolute comfort.
            </p>
            <Button href="#" text="Explore More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modern;
