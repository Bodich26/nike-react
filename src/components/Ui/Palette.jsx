import styles from './UiStyles.module.scss';

const Palette = () => {
  return (
    <div className={styles['palette']}>
      <div className={styles['palette__box-lightred']}></div>
      <div className={styles['palette__box-pink']}></div>
      <div className={styles['palette__box-blue']}></div>
      <div className={styles['palette__box-black']}></div>
      <div className={styles['palette__box-red']}></div>
      <div className={styles['palette__box-yellow']}></div>
      <div className={styles['palette__box-green']}></div>
    </div>
  );
};

export default Palette;
