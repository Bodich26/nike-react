import styles from './Best.module.scss';
import './../../styles/container.scss';

import Preview1 from '../../img/prev-1.png';
import Preview2 from '../../img/prev-2.png';
import Preview3 from '../../img/prev-3.png';
import Button from '../Ui/Button';

const Best = () => {
  return (
    <section className={styles.best}>
      <div className="container">
        <div className={styles.best__wrap}>
          <div className={styles.best__left}>
            <h3 className={styles['best__left-title']}>
              BEST SHOES FOR THE BEST PEOPLE
            </h3>
            <p className={styles['best__left-text']}>
              Design for the way you live your life. Atoms are beautiful in
              their simplicity, supporting your feet with absolute comfort.
            </p>
            <Button href="#" text="Explore More" />
          </div>
          <div className={styles.best__right}>
            <div className={styles['best__right-glowball']}></div>
            <img src={Preview1} alt="Preview-1" />
            <img src={Preview2} alt="Preview-2" />
            <img src={Preview3} alt="Preview-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;
