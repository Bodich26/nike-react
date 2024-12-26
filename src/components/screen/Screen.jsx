import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import styles from './Screen.module.scss';
import './../../styles/container.scss';

import 'swiper/css/navigation';

import PictureProductOne from './../../img/product/Product7.png';
import PictureProductTwo from './../../img/product/Product8.png';
import PictureProductThree from './../../img/product/Product9.png';
import Labels from './../../img/Labels.png';

import ArrowPrev from './../../img/prevArrow.svg';
import ArrowNext from './../../img/nextArrow.svg';

import 'swiper/css';
import ChoiceSneakers from '../choiceSneakers/ChoiceSneakers';

const SliderProducts = [
  {
    id: 1,
    title: 'Nike Cosmic Unity 2',
    img: PictureProductOne,
  },
  {
    id: 2,
    title: 'NIKE SB Dunk High',
    img: PictureProductTwo,
  },
  {
    id: 3,
    title: 'Nike Dynamo GO SE',
    img: PictureProductThree,
  },
  {
    id: 4,
    title: 'NIKE BT Dunk',
    img: PictureProductTwo,
  },
  {
    id: 5,
    title: 'Nike Dynamo GO SD',
    img: PictureProductThree,
  },
];

const Screen = () => {
  return (
    <section className={styles['screen']}>
      <div className="container">
        <div className={styles['screen__wrap']}>
          <ChoiceSneakers />
          <div className={styles['screen__block']}>
            <div className={styles['screen-controller']}>
              <div
                className={`${
                  styles[('button-prev-slide', 'screen__arrows')]
                }  button-prev-slide `}
              >
                <img src={ArrowPrev} alt="ArrowPrev" />
                <span className={styles['screen__arrow-text']}>Previous</span>
              </div>
              <div
                className={`${
                  styles[('button-next-slide', 'screen__arrows')]
                }  button-next-slide `}
              >
                <span className={styles['screen__arrow-text']}>Next</span>
                <img src={ArrowNext} alt="ArrowNext" />
              </div>
            </div>
            <Swiper
              className={styles['screen__block-slider']}
              spaceBetween={40}
              slidesPerView={3}
              modules={[Navigation]}
              navigation={{
                nextEl: '.button-next-slide',
                prevEl: '.button-prev-slide',
                clickable: true,
              }}
              breakpoints={{
                // Когда ширина экрана меньше или равна 768px, показывать 1 слайд
                310: {
                  slidesPerView: 1,
                },
                425: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 3,
                },
              }}
            >
              {SliderProducts.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={styles['screen__slide']}>
                      <div className={styles['screen__box']}>
                        <img src={item.img} alt="Product" />
                      </div>
                      <span className={styles['screen__slide-title']}>
                        {item.title}
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className={styles['screen__decor']}>
        <img src={Labels} alt="Decor" />
      </div>
    </section>
  );
};

export default Screen;
