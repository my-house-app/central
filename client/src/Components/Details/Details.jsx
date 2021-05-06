import React from 'react';
// import Like from '../Like';
// import ImagesCarrousel from '../ImagesCarrousel';
// import Share from '../Share';
// import ScheduleTour from '../ScheduleTour';

export default function Details({
// eslint-disable-next-line react/prop-types
  title, description, price, ...rest
}) {
  // eslint-disable-next-line no-param-reassign
  title = 'Hermoso Apartamento ';
  // eslint-disable-next-line no-param-reassign
  description = 'Ubicado en la mejor zona de ciudad, con hermosa vista al centro de la ciudad';
  // eslint-disable-next-line no-param-reassign
  price = 450000;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{price}</span>
      {/* <ImagesCarrousel/> */}
      {/* <Like /> */}
      {/* <Share/> */}
      {/* <ScheduleTour/> */}
      <p>{JSON.stringify(rest)}</p>
    </div>
  );
}
