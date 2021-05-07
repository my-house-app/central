import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {
  slider,
  slide,
  active,
  rightArrow,
  leftArrow,
  image,
} from './SliderCarousel.module.css';

const SliderCarousel = ({ elements = [] }) => {
  const [current, setCurrent] = useState(0);

  const elementsLength = elements.length;

  if (!elementsLength) return null;

  const next = () => {
    setCurrent(current === elementsLength - 1 ? 0 : current + 1);
  };
  const previous = () => {
    setCurrent(current === 0 ? elementsLength - 1 : current - 1);
  };

  return (
    <section className={slider}>
      <FontAwesomeIcon
        size="5x"
        icon={faAngleLeft}
        onClick={previous}
        className={leftArrow}
      />
      <FontAwesomeIcon
        size="5x"
        icon={faAngleRight}
        onClick={next}
        className={rightArrow}
      />
      {elements.map((element, index) => (
        <div className={index === current ? `${slide} ${active}` : `${slide}`}>
          {index === current && (
            <img
              className={image}
              key={element.id}
              src={element.photo}
              alt="house view"
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default SliderCarousel;
