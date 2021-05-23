import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faBed, faBath, faRulerCombined,
} from '@fortawesome/free-solid-svg-icons';
// import { FaRegHeart } from 'react-icons/fa';
import { RiVipCrownLine } from 'react-icons/ri';

import style from './Card.module.css';

// export default function Card(props) {
export default function Card({
  image, postName, propType, neighborhood, price, rooms, bathrooms, m2, id, premium,
}) {
  return (
    <>
      <div className={style.ctn}>
        <Link to={`/post/${id}`}>
          <img src={image} alt={`${propType} en ${neighborhood}`} className={style.img} />
        </Link>
        <div className={style.propInfo}>
          <div className={style.general}>
            <div className={style.title_price}>
              <Link to={`/post/${id}`}>
                <h3>{postName}</h3>
              </Link>
              <h3 className={style.price}>{`$${new Intl.NumberFormat('de-DE').format(price)}`}</h3>
            </div>
            <p>{`${propType} en ${neighborhood}`}</p>
          </div>
          <div className={style.details}>
            <p>
              {rooms}
              <span className={style.icon}>
                <FontAwesomeIcon icon={faBed} />
              </span>
            </p>
            <p>
              {bathrooms}
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
          </div>
        </div>
        {/* <div className={style.fav}>
          <FaRegHeart />
        </div> */}
        {premium ? (
        <div className={style.premium}>
          <RiVipCrownLine size={20} />
        </div>
        ) : (
          <div></div>
        )    
        }    
      </div>
    </>
  );
}
