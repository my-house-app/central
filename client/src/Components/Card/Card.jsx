import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart, faBed, faBath, faRulerCombined,
} from '@fortawesome/free-solid-svg-icons';
import style from './Card.module.css';

// export default function Card(props) {
export default function Card({
  image, postName, propType, neighborhood, price, rooms, m2,
}) {
  // console.log("props:", props);

  return (
    <div className={style.ctn}>
      <img src={image} alt="props.prop_type in props.neighborhood" className={style.img} />
      <div className={style.propInfo}>
        <div className={style.general}>
          <div className={style.title_price}>
            <h3>{postName}</h3>
            {/* <p>Casa nueva ubicada en Barrio1</p> */}
            <h3 className={style.price}>{`$${price}`}</h3>
            {/* <p>$1000</p> */}
          </div>
          <p>{`${propType} en ${neighborhood}`}</p>
          {/* <p>Casa en Barrio1</p> */}
        </div>
        <div className={style.details}>
          <p>
            {rooms}
            <span className={style.icon}>
              <FontAwesomeIcon icon={faBed} />
            </span>
          </p>
          {/* <p>Habitaciones: 3</p> */}
          <p>
            4
            <span className={style.icon}>
              <FontAwesomeIcon icon={faBath} />
            </span>
          </p>
          <p>
            {m2}
            <span className={style.icon}>
              <FontAwesomeIcon icon={faRulerCombined} />
            </span>
          </p>
          {/* <p>50 m&sup2;</p> */}
        </div>
      </div>
      <div className={style.fav}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
}
