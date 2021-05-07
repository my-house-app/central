// import Like from '../Like';
// import Share from '../Share';
// import ScheduleTour from '../ScheduleTour';
import SliderCarousel from '../SliderCarousel/SliderCarousel';
import { container } from './Details.module.css';

const images = [
  {
    id: 0,
    photo:
      'https://metrocuadrado.blob.core.windows.net/inmuebles/5265-M2856945/5265-M2856945_2_p.jpg',
  },

  {
    id: 2,
    photo:
      'https://metrocuadrado.blob.core.windows.net/inmuebles/3390-M2856958/3390-M2856958_4_p.jpg',
  },

  {
    id: 4,
    photo:
      'https://metrocuadrado.blob.core.windows.net/inmuebles/2444-1328L7/2444-1328L7_1_p.jpg',
  },
  {
    id: 5,
    photo:
      'https://metrocuadrado.blob.core.windows.net/inmuebles/416-1556/416-1556_1_p.jpg',
  },

  {
    id: 6,
    photo:
      'https://metrocuadrado.blob.core.windows.net/inmuebles/2444-2333L19/2444-2333L19_1_p.jpg',
  },
  {
    id: 7,
    photo:
      'https://metrocuadrado.blob.core.windows.net/inmuebles/2444-1556L12/2444-1556L12_1_p.jpg',
  },

  {
    id: 8,
    photo:
      'https://metrocuadrado.blob.core.windows.net/inmuebles/4303-990/4303-990_15_p.jpg',
  },
  {
    id: 9,
    photo:
      'https://metrocuadrado.blob.core.windows.net/inmuebles/12041-3830350/12041-3830350_14_p.jpg',
  },
  {
    id: 10,
    photo:
      'https://metrocuadrado.blob.core.windows.net/inmuebles/3390-M2857043/3390-M2857043_3_p.jpg',
  },
];

export default function Details({
  title,
  description,
  price,
  city,
  // images,
  ...rest
}) {
  return (
    <div className={container}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{city}</p>
        <span>{price}</span>
      </div>
      <div>
        <SliderCarousel elements={images} />
      </div>

      {/* <Like /> */}
      {/* <Share/> */}

      <div>{/* <ScheduleTour/> */}</div>
    </div>
  );
}
