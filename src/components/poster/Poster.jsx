import styles from './Poster.module.scss';

const Poster = ({ poster, title }) => {
  return (
    <div className={styles['poster']}>
      <img className={styles['poster__img']} src={poster} alt="Poster" />
      <h3 className={styles['poster__title']}>{title}</h3>
    </div>
  );
};

export default Poster;
