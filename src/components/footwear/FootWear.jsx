import styles from './FootWear.module.scss';
import './../../styles/container.scss';
import Effect from './../../img/Effect1.png';
import Button from '../Ui/Button';

import PictureOne from './../../img/picture1.jpg';
import PictureTwo from './../../img/picture2.jpg';
import DecorLine from './../../img/line.svg';

const FootWear = () => {
  return (
    <section className={styles['footwear']}>
      <div className={styles['footwear__line']}>
        <img src={DecorLine} alt="DecorLine" />
      </div>
      <div className="container">
        <div className={styles['footwear__wrap']}>
          <div className={styles['footwear__box']}>
            <img
              className={styles['footwear__box-effect']}
              src={Effect}
              alt="Effect"
            />
            <h2 className={styles['footwear__box-title']}>
              THE ESSENCE
              <img
                className={styles['footwear__picture1']}
                src={PictureOne}
                alt="PictureOne"
              />
              HANDCRAFTED OF
              <img
                className={styles['footwear__picture2']}
                src={PictureTwo}
                alt="PictureTwo"
              />
              FOOTWEAR
            </h2>
          </div>
          <p className={styles['footwear__text']}>
            In terms of footwear, we are the first in Canada to have opened not
            simple "shops" but real company outlets that offer the same service
            as the artisan shops of yesteryear: this to make you go without fail
            every time you want to buy a pair of handmade genuine leather shoes.
            Without fear of making mistakes and with the certainty that you will
            be able to wear them comfortably from the beginning. Are you also
            curious to find out why hundreds of people choose us every day?
          </p>
          <Button href="#" text="Find Out More" />
        </div>
      </div>
    </section>
  );
};

export default FootWear;
