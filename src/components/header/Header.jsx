import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import '../../styles/container.scss';

import logo from '../../img/logo.svg';
import search from '../../img/search.svg';
import account from '../../img/account.svg';
import card from '../../img/card.svg';

const Header = () => {
  const [burgerBtn, setBurgerBtn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);

  const handleBurgerBtn = () => {
    setBurgerBtn(!burgerBtn);
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 0;
      setHeaderScroll(isScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles['header']} ${
        headerScroll ? styles['scroll'] : 'header'
      }`}
    >
      <div className="container">
        <div className={styles.header__wrap}>
          <div
            className={`${styles['mobile__btn']} ${
              burgerBtn ? styles['active'] : 'mobile__btn'
            }`}
            onClick={handleBurgerBtn}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav
            className={`${styles['menu']} ${
              menuOpen ? styles['active'] : 'menu'
            }`}
          >
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <a className={styles['menu__item-link']} href="#!">
                  New Arrival
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles['menu__item-link']} href="#!">
                  Men
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles['menu__item-link']} href="#!">
                  Women
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles['menu__item-link']} href="#!">
                  Kids
                </a>
              </li>
            </ul>
          </nav>
          <a className={styles.logo} href="home">
            <img src={logo} alt="Logo" />
          </a>
          <div className={styles.header__box}>
            <a className={styles['header__box-item']} href="#!">
              <img src={search} alt="Shearch" />
            </a>
            <a className={styles['header__box-item']} href="#!">
              <img src={account} alt="Account" />
            </a>
            <a className={styles['header__box-item']} href="#!">
              <img src={card} alt="Card" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
