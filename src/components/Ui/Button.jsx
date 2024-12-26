import styles from './UiStyles.module.scss';
import arrowLink from '../../img/arrow-link.svg';

const handleDafaulValue = (event) => {
  event.preventDefault();
};

const Button = ({ href, text }) => {
  return (
    <a className={styles['button']} href={href} onClick={handleDafaulValue}>
      {text}
      <img src={arrowLink} alt="ArrowLink" />
    </a>
  );
};

export default Button;
