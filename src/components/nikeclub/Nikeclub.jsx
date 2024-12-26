import styles from '../nikeclub/Nikeclub.module.scss';
import './../../styles/container.scss';

import logo from '../../img/logo.svg';
import ezShose from '../../img/ezShose.png';
import Button from '../Ui/Button';

const Nikeclub = () => {
  return (
    <section className={styles.nikeclub}>
      <div className={styles['nikeclub__shose']}>
        <img
          className={styles['nikeclub__shose-img']}
          src={ezShose}
          alt="Shose1"
        />
      </div>
      <div className="container">
        <div className={styles.nikeclub__wrap}>
          <div className={styles.nikeclub__block}>
            <h3 className={styles['nikeclub__block-title']}>
              JOIN OUR NIKECLUB & GET 15% OFF
            </h3>
            <p className={styles['nikeclub__block-text']}>
              Sign up for free. Join the community, Never pay for shipping.
            </p>
            <Button href="#" text="Join Us" />
          </div>
          <img className={styles.nikeclub__logo} src={logo} alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default Nikeclub;
