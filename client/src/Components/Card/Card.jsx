import React from 'react';
import style from './Card.module.css';

// export default function Card(props) {
export default function Card({
  image, postName, propType, neighborhood, price, rooms, m2,
}) {
  // console.log("props:", props);

  return (
    <div className={style.ctn}>
      <img src={image} alt="props.prop_type in props.neighborhood" className={style.img} />
      <div>
        <button type="button">Agregar a favoritos</button>
        <p>{postName}</p>
        {/* <p>Casa nueva ubicada en Barrio1</p> */}
        <p>{`${propType} en ${neighborhood}`}</p>
        {/* <p>Casa en Barrio1</p> */}
        <p>{`$${price}`}</p>
        {/* <p>$1000</p> */}
      </div>
      <div>
        <p>{rooms}</p>
        {/* <p>Habitaciones: 3</p> */}
        <p>{m2}</p>
        {/* <p>50 m&sup2;</p> */}
      </div>
    </div>
  );
}
