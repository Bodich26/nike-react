import styles from './Footer.module.scss';

import yotube from '../../img/youtube.svg';
import facebook from '../../img/facebook.svg';
import twitter from '../../img/twitter.svg';
import instagram from '../../img/instagram.svg';
import car from '../../img/car.svg';
import time from '../../img/time.svg';
import secure from '../../img/secure.svg';
import box from '../../img/box.svg';
import logoTwo from '../../img/Logo-two.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <dl className={styles['footer__top-wrap']}>
            <div className={styles['footer__top-item']}>
              <img src={car} alt="Car" />
              <div className={styles['footer__top-box']}>
                <dt className={styles['footer__top-title']}>Free Delivery</dt>
                <dd className={styles['footer__top-text']}>From $29.99</dd>
              </div>
            </div>
          </dl>

          <dl className={styles['footer__top-wrap']}>
            <div className={styles['footer__top-item']}>
              <img src={time} alt="Time" />
              <div className={styles['footer__top-box']}>
                <dt className={styles['footer__top-title']}>
                  Free Withdrawal 1h
                </dt>
                <dd className={styles['footer__top-text']}>In store</dd>
              </div>
            </div>
          </dl>

          <dl className={styles['footer__top-wrap']}>
            <div className={styles['footer__top-item']}>
              <img src={secure} alt="Secure" />
              <div className={styles['footer__top-box']}>
                <dt className={styles['footer__top-title']}>
                  100% Secure Payment
                </dt>
                <dd className={styles['footer__top-text']}>At Your Service</dd>
              </div>
            </div>
          </dl>

          <dl className={styles['footer__top-wrap']}>
            <div className={styles['footer__top-item']}>
              <img src={box} alt="Box" />
              <div className={styles['footer__top-box']}>
                <dt className={styles['footer__top-title']}>
                  Returns & Exchanges
                </dt>
                <dd className={styles['footer__top-text']}>Offered 365 Days</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className={styles.footer__center}>
          <div className={styles['footer__center-wrap']}>
            <div className={styles['footer__center-left']}>
              <h3 className={styles['footer__center-title']}>
                Let’s Stay In Touch
              </h3>
              <div className={styles['footer__center-container']}>
                <form className={styles['footer__center-form']} action="#">
                  <input
                    className={styles['footer__center-input']}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email..."
                    required
                  />
                  <button
                    className={styles['footer__center-btn']}
                    type="submit"
                    name="button"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <img
                className={styles['footer__center-logo']}
                src={logoTwo}
                alt="Logo-Two"
              />
            </div>
            <div className={styles['footer__center-right']}>
              <div className={styles['footer__center-wrap']}>
                <div className={styles['footer__center-columns']}>
                  <p className={styles['footer__columns-title']}>Shop</p>
                  <ul className={styles['footer__columns-list']}>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Mens
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Womens
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        New Arrival
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles['footer__center-columns']}>
                  <p className={styles['footer__columns-title']}>
                    OUR SERVICES
                  </p>
                  <ul className={styles['footer__columns-list']}>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Customize your products
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Gift Card
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Maintain & Repair
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles['footer__center-columns']}>
                  <p className={styles['footer__columns-title']}>CONTACT US</p>
                  <ul className={styles['footer__columns-list']}>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Find a Store
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Contact Us
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles['footer__center-columns']}>
                  <p className={styles['footer__columns-title']}>
                    OUR ENTERPRISE
                  </p>
                  <ul className={styles['footer__columns-list']}>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Who are we?
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Press and news
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Our alliances
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles['footer__columns-box']}>
                <div className={styles['footer__center-columns']}>
                  <p className={styles['footer__columns-title']}>NEED HELP ?</p>
                  <ul className={styles['footer__columns-list']}>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        My Account
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Shipping
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Return & Exchanges
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        FAQs
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Rewards
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Loyalty program
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        How to choose your product?
                      </a>
                    </li>
                    <li className={styles['footer__columns-item']}>
                      <a className={styles['footer__columns-link']} href="#!">
                        Sports Trends
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles['footer__bottom-copy']}>
            2022 Nike, Inc. All Rights Reserved ©
          </p>
          <div className={styles['footer__bottom-wrap']}>
            <a href="#!">
              <img src={yotube} alt="Youtube" />
            </a>
            <a href="#!">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#!">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#!">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
