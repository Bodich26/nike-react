import styles from './Visionaries.module.scss';
import '../../styles/container.scss';

import posterOne from '../../img/poster-1.jpg';
import Button from './../Ui/Button';

const Visionaries = () => {
  return (
    <section className={styles.visionaries}>
      <div className="container">
        <div className={styles.visionaries__wrap}>
          <div className={styles.visionaries__left}>
            <img src={posterOne} alt="Poster-1" />
          </div>
          <div className={styles.visionaries__right}>
            <h3 className={styles['visionaries__right-title']}>
              WE ARE <span>VISIONARIEs</span>
            </h3>
            <p className={styles['visionaries__right-text']}>
              Exploring the boundaries of footwear with expert design knowledge
              and manufacture in mind.
            </p>
            <p className={styles['visionaries__right-subtitle']}>
              INSIGHTFUL CREATIVE DIRECTION
              <span className={styles['visionaries__right-text']}>
                : Uniting Consumer Insights with progressive manufacturing
                methods, we create comprehensive plans to outpace your
                competition.
              </span>
            </p>
            <p className={styles['visionaries__right-subtitle']}>
              PURPOSEFUL DESIGN
              <span className={styles['visionaries__right-text']}>
                : We create products that captivate consumers and elevate
                brands. applying a refined sense of beauty and style, our
                designs are alluring.
              </span>
            </p>
            <p className={styles['visionaries__right-subtitle']}>
              RELENTLESS INNOVATION
              <span className={styles['visionaries__right-text']}>
                : We live to challenge the boundaries of convention and take
                advantage of every breakthrough opportunity big or small. we’ll
                help you define the cutting-edge of your business.
              </span>
            </p>
            <Button href="#" text="Customization Available" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visionaries;
