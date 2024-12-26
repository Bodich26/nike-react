import { useEffect, useState } from 'react';
import styles from './ChoiceSneakers.module.scss';
import IconCard from './../../img/card.svg';

import Button from './../Ui/Button';

import SneakerLightred from './../../img/main-product/sneakers-lightred.png';
import SneakerBlack from './../../img/main-product/sneakers-black.png';
import SneakerPink from './../../img/main-product/sneakers-pink.png';
import SneakerBlue from './../../img/main-product/sneakers-blue.png';
import SneakerGreen from './../../img/main-product/sneakers-green.png';
import SneakerRed from './../../img/main-product/sneakers-red.png';
import SneakerYellow from './../../img/main-product/sneakers-yellow.png';

const SneakersModels = [
  {
    color: 'lightred',
    img: SneakerLightred,
    title: 'AIR JORDAN 1 RETRO HIGH lightred',
    size: [
      { size: 41, price: 275 },
      { size: 42, price: 280 },
      { size: 43, price: 285 },
    ],
  },
  {
    color: 'pink',
    img: SneakerPink,
    title: 'AIR JORDAN 1 RETRO HIGH PINK',
    size: [
      { size: 42, price: 280 },
      { size: 44, price: 290 },
    ],
  },
  {
    color: 'blue',
    img: SneakerBlue,
    title: 'AIR JORDAN 1 RETRO HIGH BLUE',
    size: [
      { size: 41, price: 275 },
      { size: 42, price: 280 },
      { size: 45, price: 298 },
    ],
  },
  {
    color: 'black',
    img: SneakerBlack,
    title: 'AIR JORDAN 1 RETRO HIGH BLACK',
    size: [
      { size: 41, price: 275 },
      { size: 44, price: 290 },
    ],
  },
  {
    color: 'red',
    img: SneakerRed,
    title: 'AIR JORDAN 1 RETRO HIGH RED',
    size: [
      { size: 41, price: 275 },
      { size: 45, price: 298 },
    ],
  },
  {
    color: 'yellow',
    img: SneakerYellow,
    title: 'AIR JORDAN 1 RETRO HIGH Yellow',
    size: [
      { size: 42, price: 280 },
      { size: 43, price: 285 },
      { size: 44, price: 290 },
    ],
  },
  {
    color: 'green',
    img: SneakerGreen,
    title: 'AIR JORDAN 1 RETRO HIGH Green',
    size: [
      { size: 41, price: 275 },
      { size: 43, price: 285 },
    ],
  },
];

const ChoiceSneakers = () => {
  const [color, setColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);

  useEffect(() => {
    const selectedSneaker = SneakersModels.find(
      (sneaker) => sneaker.color === color
    );

    if (selectedSneaker && selectedSneaker.size.length > 0) {
      setSelectedSize(selectedSneaker.size[0].size);
      setSelectedPrice(selectedSneaker.size[0].price);
    }
  }, [color]);

  const handleSelectChange = (event) => {
    const selectSize = parseInt(event.target.value);
    setSelectedSize(selectSize);

    const selectSneaker = SneakersModels.find(
      (sneaker) => sneaker.color === color
    );

    if (selectSneaker) {
      const selectSizeData = selectSneaker.size.find(
        (sizeData) => sizeData.size === selectSize
      );
      if (selectSizeData) {
        setSelectedPrice(selectSizeData.price);
      }
    }
  };

  const hendleColorChange = (color) => {
    setColor(color);
  };

  return (
    <div className={styles['sneakers']}>
      <div className={styles['sneakers__palette']}>
        <div
          className={`${styles['sneakers__palette-lightred']} ${
            color === 'lightred' ? styles['active-color'] : ''
          }`}
          onClick={() => hendleColorChange('lightred')}
        ></div>
        <div
          className={`${styles['sneakers__palette-pink']} ${
            color === 'pink' ? styles['active-color'] : ''
          }`}
          onClick={() => hendleColorChange('pink')}
        ></div>
        <div
          className={`${styles['sneakers__palette-blue']} ${
            color === 'blue' ? styles['active-color'] : ''
          }`}
          onClick={() => hendleColorChange('blue')}
        ></div>
        <div
          className={`${styles['sneakers__palette-black']} ${
            color === 'black' ? styles['active-color'] : ''
          }`}
          onClick={() => hendleColorChange('black')}
        ></div>
        <div
          className={`${styles['sneakers__palette-red']} ${
            color === 'red' ? styles['active-color'] : ''
          }`}
          onClick={() => hendleColorChange('red')}
        ></div>
        <div
          className={`${styles['sneakers__palette-yellow']} ${
            color === 'yellow' ? styles['active-color'] : ''
          }`}
          onClick={() => hendleColorChange('yellow')}
        ></div>
        <div
          className={`${styles['sneakers__palette-green']} ${
            color === 'green' ? styles['active-color'] : ''
          }`}
          onClick={() => hendleColorChange('green')}
        ></div>
      </div>
      {SneakersModels.filter((sneaker) => sneaker.color === color).map(
        (sneaker) => {
          return (
            <>
              <div className={styles['sneakers__model']}>
                <img src={sneaker.img} alt="Sneakers" />
              </div>
              <div className={styles['sneakers__feature']}>
                <h1 className={styles['sneakers__title']}>{sneaker.title}</h1>
                <div className={styles['sneakers__wrap']}>
                  <span className={styles['sneakers__wrap-price']}>
                    ${selectedPrice}
                  </span>
                  <div className={styles['sneakers__block']}>
                    <div className={styles['sneakers__box']}>
                      <span className={styles['sneakers__box-size']}>Size</span>
                      <select
                        className={styles['sneakers__box-number']}
                        value={selectedSize}
                        onChange={handleSelectChange}
                      >
                        {sneaker.size.map((sizeData) => (
                          <option value={sizeData.size} key={sizeData.size}>
                            {sizeData.size}
                          </option>
                        ))}
                      </select>
                    </div>
                    <img
                      className={styles['sneakers__block-icon']}
                      src={IconCard}
                      alt="Card"
                    />
                  </div>
                </div>
                <Button href={''} text="More Details" />
              </div>
            </>
          );
        }
      )}
    </div>
  );
};

export default ChoiceSneakers;
