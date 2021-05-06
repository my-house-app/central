import React from 'react';

// export default function Card(props) {
export default function Card() {
  // console.log("props:", props);

  return (
    <div>
      <button type="button">Agregar a favoritos</button>
      {/* <div>
        <img src={`props.image`} alt={`props.prop_type in props.neighborhood`}/>
      </div> */}
      <div>
        {/* <p>{`${props.post_name}`}</p> */}
        <p>Casa nueva ubicada en Barrio1</p>
        {/* <p>{`${props.prop_type} en ${props.neighborhood}`}</p> */}
        <p>Casa en Barrio1</p>
        {/* <p>{`$${props.price}`}</p> */}
        <p>$1000</p>
      </div>
      <div>
        {/* <p>{`$${props.rooms}`}</p> */}
        <p>Habitaciones: 3</p>
        {/* <p>{`$${props.m2}`}</p> */}
        <p>50 m&sup2;</p>
      </div>
    </div>
  );
}
